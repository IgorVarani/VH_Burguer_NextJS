import CardProduto from "../card-produto/card-produto";
import styles from "./lista-produto.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
import { useEffect, useState } from "react";
import { excluirProduto, listarProduto } from "@/pages/api/produtoService";
import { erro, notificao, toastConfirmarExclusao } from "@/utils/toast";

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
        listar();
    }, [])

    return (
        <>
            <div id={styles.botoes_home}>
                <button className={styles.botao}>Filtrar<FontAwesomeIcon icon={faSliders} /></button>
                <div id={styles.botoes_direita}>
                    <Link href="/produto" className={styles.botao}>Adicionar Produtos</Link>
                </div>
            </div>
            
            <div id={styles.cards_produtos}>
                {produtos.length > 0 ? produtos.map((item) => (
                    <CardProduto key={item.produtoId} produtoId={item.produtoId}
                    titulo={item.nome} descricao={item.descricao}
                    preco={item.preco} imagem={item.imagemUrl}
                    onDelete={confirmarExclusao}/>
                )) : (
                    <p>Carregando Produto...</p>
                )}
            </div>
        </>
    )
}

export default ListaProduto;