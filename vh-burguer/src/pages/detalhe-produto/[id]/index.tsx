import HeaderMini from "@/components/header-mini/header-mini";
import { Fragment } from "react/jsx-runtime";
import styles from "./detalhe-produto.module.css"
import Footer from "@/components/footer/footer";
import { useEffect, useEffectEvent, useState } from "react";
import { listarPorId } from "../../api/produtoService";
import { useParams } from "next/navigation";

interface Produto
{
    nome: string;
    descricao: string;
    preco: number;
    imagemUrl: string;
    categorias: string[];
    categoriasIds: number[];
}

const Detalhe = () => {

    const[produto, setProduto] = useState<Produto>();

    const params = useParams();

    const id = params?.id;

    async function listarProduto()
    {
        try
        {
            const response = await listarPorId(Number(id));
            setProduto(response);
        }
        catch(error: any)
        {
            console.log(error.message);
        }
    }

    useEffect(() =>
    {
        if (!id) return;

        setTimeout(() =>
        {
            listarProduto();
        }, 1000);
        listarProduto();
    }, [id])

    return (
        <>
            <HeaderMini />
            <main className={styles.main_detalhes}>
                <section className={`${styles.detalhes} layout_guide`}>
                    <article className={styles.card_detalhes} aria-label="Card de detalhes do produto">
                        { produto ? (
                        <>
                            <h1 id="titulo-detalhes-produto" className={styles.detalhes_titulo}>Detalhes do {produto?.nome}</h1>
                            <figure className={styles.card_detalhes_imagem} >
                                <img src="/imgs/HamburguerAlcatraComBacon.png"
                                alt="Hambúrguer sobre uma tábua de madeira, com pão, carne, queijo, bacon, alface, tomate e cebola roxa." />
                            </figure>

                            <div className={styles.card_detalhes_infos}>
                                <div className={`${styles.card_detalhes_col} ${styles.card_detalhes_col_esq}`}>
                                    <div className={styles.campo}>
                                        <h2 className={styles.campo_titulo}>Nome do Produto</h2>
                                        <p className={styles.campo_valor}>{produto.nome}</p>
                                    </div>

                                    <div className={styles.campo}>
                                        <h2 className={styles.campo_titulo}>Descrição</h2>
                                        <p className={styles.campo_valor}>{produto.descricao}</p>
                                    </div>
                                </div>

                                <div className={`${styles.card_detalhes_col} ${styles.card_detalhes_col_dir}`}>
                                    <div className={styles.campo}>
                                        <h2 className={styles.campo_titulo}>Preço (R$)</h2>
                                        <p className={styles.campo_valor}>
                                            <span className={styles.preco_atual}>{produto.preco}</span>
                                        </p>
                                    </div>

                                    <div className={styles.campo}>
                                        <h2 className={styles.campo_titulo}>Categoria(s)</h2>
                                        <ul className={styles.campo_lista}>
                                            {produto.categorias.map((cat, id) =>
                                            (
                                                <li key={cat}>{cat}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </>
                        ) : (<p>Carregando Detalhes...</p>)}
                    </article>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Detalhe;