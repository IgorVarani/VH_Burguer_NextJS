import styles from "./card-produto.module.css"

const CardProduto = () => {
    return (
        <article className={styles.card_produto}>
            <img src="/imgs/Hamburguer_Alcatra.png" alt="Produto vendido pela loja." className={styles.img_produto} />
            <h3 className={styles.titulo_produto}>Monster</h3>
            <p className={styles.desc_produto}>Hambúrguer brutal, suculento e exageradamente saboroso.</p>

            <div className={styles.campo_itens}>
                <p className={styles.valor_produto}>R$35,00</p>
                <button>
                    <img id={styles.info} src="/imgs/Info.svg" alt="ícone que representa edição" />
                </button>

                <button>
                    <img src="/imgs/Editar.svg" alt="ícone que representa edição" />
                </button>

                <button>
                    <img src="/imgs/Trash.svg" alt="ícone que representa exclusão." />
                </button> 
            </div>
        </article>
    )
}

export default CardProduto;