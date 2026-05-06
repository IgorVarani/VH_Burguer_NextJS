import { formatarPreco } from "@/utils/formatacao";
import styles from "./card-produto.module.css"
import Link from "next/link";

type Produto =
{
    imagem: string,
    titulo: string,
    descricao: string,
    preco: number,
    produtoId: number,
    onDelete: (produtoId: number) => void
}

const CardProduto = ({imagem, titulo, descricao, preco, produtoId, onDelete} : Produto) => {
    return (
        <article className={styles.card_produto}>
            <Link href={"/detalhe-produto/" + produtoId}>
                <img src={imagem} alt="Produto vendido pela loja." className={styles.img_produto} />
            </Link>

            <h3 className={styles.titulo_produto}>{titulo}</h3>
            <p className={styles.desc_produto}>{descricao}</p>

            <div className={styles.campo_itens}>
                <p className={styles.valor_produto}>{formatarPreco(preco)}</p>
                <Link href={"/historico/" + produtoId}>
                    <img id={styles.info} src="/imgs/Info.svg" alt="ícone que representa informação" />
                </Link>

                <Link href={"/produto?id=" + produtoId}>
                    <img src="/imgs/Editar.svg" alt="ícone que representa edição" />
                </Link>

                <button onClick={() => onDelete(produtoId)}>
                    <img src="/imgs/Trash.svg" alt="ícone que representa exclusão." />
                </button> 
            </div>
        </article>
    )
}

export default CardProduto;