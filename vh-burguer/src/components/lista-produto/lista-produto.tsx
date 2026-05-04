import CardProduto from "../card-produto/card-produto";
import styles from "./lista-produto.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
import { useEffect, useState } from "react";
import { listarProduto } from "@/pages/api/produtoService";

interface Produto
{
    produtoId: number,
    nome: string,
    preco: number,
    descricao: string,
    imagemUrl: string
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
                    preco={item.preco} imagem={item.imagemUrl}/>
                )) : (
                    <p>Carregando Produto...</p>
                )}
            </div>
        </>
    )
}

export default ListaProduto;