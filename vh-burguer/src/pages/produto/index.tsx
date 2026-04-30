import Footer from "@/components/footer/footer";
import HeaderMini from "@/components/header-mini/header-mini";
import { Fragment } from "react/jsx-runtime"
import styles from "./produto.module.css"
import Link from "next/link";
import { useEffect, useState } from "react";
import { listarCategoria } from "../api/categoriaService";
import { cadastrarProduto } from "../api/produtoService";
import { erro, notificao } from "@/utils/toast";
import Toast from "@/components/toast/toast";

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
    console.log(nome);
    console.log(descricao);
    console.log(preco);
    console.log(imagem);
    console.log(categoriasSelecionadas);

    async function listarCategoriaEmProduto()
    {
        const lista = await listarCategoria();
        setCategorias(lista.data);
    }

    async function Cadastrar(e: React.FormEvent<HTMLFormElement>)
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

            await cadastrarProduto(dados)
            notificao("Produto Cadastrado!");
        }
        catch(error: any)
        {
            erro(error.message);
        }
    }

    //? Quando o produto for renderizado, a função "listarCategoriaEmProduto" ocorrerá.
    useEffect(() => {
        listarCategoriaEmProduto();
    }, [])

    return (
        <Fragment>
            <HeaderMini/>
            <Toast/>
            <main id={styles.main}>
                <h1>CRIAR PRODUTO</h1>
                <form id={styles.form_container} onSubmit={Cadastrar}>
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
                        <select multiple onChange={(e) =>
                        setCategoriasSelecionadas(Array.from(e.target.selectedOptions).map((option) => Number(option.value)))}>
                            {categorias.map((item) => (<option value={item.categoriaId} key={item.categoriaId}>{item.nome}</option>))}
                        </select>
                        <Link id={styles.link} href="/categoria">Adicionar Categoria</Link>
                    </div>

                    <div className={styles.div_agrupar}>
                        <span>URL da Imagem</span>
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