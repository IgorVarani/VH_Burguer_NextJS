import Footer from "@/components/footer/footer";
import HeaderMini from "@/components/header-mini/header-mini";
import { Fragment } from "react/jsx-runtime"
import styles from "./produto.module.css"
import Link from "next/link";
import { useEffect, useState } from "react";
import { listarCategoria } from "../api/categoriaService";
import { cadastrarProduto, editarProduto, listarPorId } from "../api/produtoService";
import { erro, notificao } from "@/utils/toast";
import Toast from "@/components/toast/toast";
import { useRouter } from "next/router";
import { verificarAutenticacao } from "@/utils/auth";

interface Categoria
{
    categoriaId: number,
    nome: string
}

const Produto = () => {

    const[categorias, setCategorias] = useState<Categoria[]>([]);

    const[nome, setNome] = useState<string>("");
    const[descricao, setDescricao] = useState<string>("");
    const[preco, setPreco] = useState<string>("");
    const[imagem, setImagem] = useState<File | null>(null);
    const[categoriasSelecionadas, setCategoriasSelecionadas] = useState<number[]>([]);
    const[estaAutenticado, setEstaAutenticado] = useState(false);

    const router = useRouter();
    const id = router.query.id;
    let telaEditar = id ? true : false;

    async function listarCategoriaEmProduto()
    {
        const lista = await listarCategoria();
        setCategorias(lista.data);
    }

    async function carregarInformacoes()
    {
        if(!id) return;

        const produto = await listarPorId(Number(id));
        setNome(produto.nome);
        setDescricao(produto.descricao);
        setPreco(produto.preco);
        setCategoriasSelecionadas(produto.categoriasId)
    }

    async function salvarProduto(e: React.FormEvent<HTMLFormElement>)
    {
        e.preventDefault();
        try
        {
            const dados =
            {
                nome,
                descricao,
                preco,
                imagem,
                categoriasId: categoriasSelecionadas
            }

            if(telaEditar)
            {
                await editarProduto(Number(id), dados);
                notificao("Produto Editado!");
            }
            else
            {
                await cadastrarProduto(dados)
                notificao("Produto Cadastrado!");
            }
        }
        catch(error: any)
        {
            erro(error.message);
        }
    }

    //? Quando o produto for renderizado, a função "listarCategoriaEmProduto" ocorrerá.
    useEffect(() => {
        if(!verificarAutenticacao())
        {
            router.push("/home")
        }
        else
        {
            setEstaAutenticado(true);
        }
        
        listarCategoriaEmProduto();
        carregarInformacoes();
    }, [])

    if(!estaAutenticado)
    {
        return null;
    }

    return (
        <Fragment>
            <HeaderMini/>
            <Toast/>
            <main id={styles.main}>
                <h1>{telaEditar ? "EDITAR PRODUTO" : "CRIAR PRODUTO"}</h1>
                <form id={styles.form_container} onSubmit={salvarProduto}>
                    <div className={styles.div_agrupar}>
                        <span>Nome do Produto</span>
                        <input type="text" placeholder="Big Monster"
                        value={nome} onChange={(e) => setNome(e.target.value)}/>
                    </div>

                    <div className={styles.div_agrupar}>
                        <span>Descrição</span>
                        <input id={styles.input_des} type="text" placeholder="Uma versão superior do clássico Monster, só que MUITO maior."
                        value={descricao} onChange={(e) => setDescricao(e.target.value)}/>
                    </div>

                    <div className={styles.div_agrupar}>
                        <span>Preço (R$)</span>
                        <input type="text" placeholder="50.00"
                        value={preco} onChange={(e) => setPreco(e.target.value)}/>
                    </div>

                    <div className={styles.div_agrupar}>
                        <span>Categoria</span>
                        <select multiple value={categoriasSelecionadas.map(String)} onChange={(e) =>
                        setCategoriasSelecionadas(Array.from(e.target.selectedOptions).map((option) => Number(option.value)))}>
                            {categorias.map((item) => (<option value={item.categoriaId} key={item.categoriaId}>{item.nome}</option>))}
                        </select>
                        <Link id={styles.link} href="/categoria">Adicionar Categoria</Link>
                    </div>

                    <div className={styles.div_agrupar}>
                        <span>Imagem do Produto</span>
                        <input type="file" onChange={(e) => {if(e.target.files && e.target.files[0])(setImagem(e.target.files[0]))}}/>
                    </div>

                    <div id={styles.botoes}>
                        <button id={styles.btn_salvar}>Salvar</button>
                    </div>
                </form>
            </main>
            <Footer/>
        </Fragment>
    )
}

export default Produto;