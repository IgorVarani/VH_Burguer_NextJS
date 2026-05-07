import CardProduto from "../card-produto/card-produto";
import styles from "./lista-produto.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
import { useEffect, useState } from "react";
import { excluirProduto, listarProduto } from "@/pages/api/produtoService";
import { erro, notificao, toastConfirmarExclusao } from "@/utils/toast";
import { verificarAutenticacao } from "@/utils/auth";

interface Produto
{
    produtoId: number,
    nome: string,
    preco: number,
    descricao: string,
    imagemUrl: string
    statusProduto: boolean,
}

const ListaProduto = () => {

    const[produtos, setProdutos] = useState<Produto[]>([]);
    const[ordem, setOrdem] = useState("todos");
    const[pesquisa, setPesquisa] = useState("");
    const[estaAutenticado, setEstaAutenticado] = useState(false);

    async function listar()
    {
        try
        {
            const lista = await listarProduto();
            setProdutos(lista);
        }
        catch(error: any)
        {
            console.log(error.message)
        }
    }

    async function confirmarExclusao(produtoId: number)
    {
        toastConfirmarExclusao(async () => {
            try
            {
                await excluirProduto(produtoId);
                setProdutos((listaAtual) => 
                    listaAtual.map((produto) => 
                        produto.produtoId === produtoId
                            ?{...produto, statusProduto: false}
                            : produto
                ))
                notificao("Produto Inativado!");
                listar();
            }
            catch(error: any)
            {
                erro(error.message);
            }
        });
    }

    useEffect(() =>
    {
        setEstaAutenticado(verificarAutenticacao());
        listar();
    }, [])

    const produtosfiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(pesquisa.toLowerCase()))
    .sort((a, b) => { //? sort --> Orgazinar/Ordenar o array.
        if(ordem === "menor_valor")
        {
            return a.preco - b.preco
        }
        else if(ordem === "maior_valor")
        {
            return b.preco - a.preco
        }
        return a.produtoId - b.produtoId;
    });

    return (
        <>
            <div id={styles.botoes_home}>
                <select className={styles.botao} value={ordem} onChange={(e) => setOrdem(e.target.value)}>
                    <option value="todos">Todos</option>
                    <option value="menor_valor">Menor Valor</option>
                    <option value="maior_valor">Maior Valor</option>
                </select>
                <div>
                    <label htmlFor="pesquisa">Pesquise</label>
                    <input type="text" name="pesquisa" id="" placeholder="Digite o nome do produto"
                    value={pesquisa} onChange={(e) => {setPesquisa(e.target.value)}}/>
                </div>
                {estaAutenticado && (
                    <div id={styles.botoes_direita}>
                        <Link href="/produto" className={styles.botao}>Adicionar Produtos</Link>
                    </div>)} 
            </div>
            
            <div id={styles.cards_produtos}>
                {produtos.length > 0 ? produtosfiltrados.map((item) => (
                    <CardProduto key={item.produtoId} produtoId={item.produtoId}
                    titulo={item.nome} descricao={item.descricao}
                    preco={item.preco} imagem={item.imagemUrl}
                    onDelete={confirmarExclusao} estaLogado={estaAutenticado}/>
                )) : (
                    <p>Carregando Produto...</p>
                )}
            </div>
        </>
    )
}

export default ListaProduto;