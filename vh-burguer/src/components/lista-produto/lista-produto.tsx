import CardProduto from "../card-produto/card-produto";
import styles from "./lista-produto.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

const ListaProduto = () => {
    return (
        <>
            <div id={styles.botoes_home}>
                <button className={styles.botao}>Filtrar<FontAwesomeIcon icon={faSliders} /></button>
                <div id={styles.botoes_direita}>
                    <Link href="/promocoes" className={styles.botao}>Promoções</Link>
                    <Link href="/produtos" className={styles.botao}>Produtos</Link>
                </div>
            </div>
            
            <div id={styles.cards_produtos}>
                <CardProduto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
            </div>
        </>
    )
}

export default ListaProduto;