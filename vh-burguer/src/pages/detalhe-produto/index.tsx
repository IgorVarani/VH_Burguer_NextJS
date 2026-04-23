import HeaderMini from "@/components/header-mini/header-mini";
import { Fragment } from "react/jsx-runtime";
import styles from "./detalhe-produto.module.css"
import Footer from "@/components/footer/footer";

const Detalhe = () => {
    return (
        <Fragment>
            <HeaderMini/>
            <main id={styles.main}>
                <section id={styles.container}>
                    <h1>DETALHES DO MONSTER</h1>
                    <img src="/imgs/Hamburguer_Alcatra.png" alt="Imagem de um hambúrguer de Alcatra com bacon." />

                    <aside id={styles.lado_esquerdo}>
                        <p className={styles.texto_negrito}>Nome do Produto</p>
                            <p className={styles.texto}>Monster</p>

                        <p className={styles.texto_negrito}>Descrição</p>
                            <p className={styles.texto}>Um pão brioche macio segura a fera: duas (ou três) carnes altas e suculentas, 
                                queijo cheddar derretido escorrendo pelas laterais, bacon crocante, cebola caramelizada no ponto adocicado, 
                                alface fresca, tomate e um molho especial intenso que amarra tudo. Para completar o ataque, uma camada extra 
                                de onion rings ou molho defumado que transforma cada mordida numa explosão.
                            </p>
                    </aside>

                    <aside id={styles.lado_direita}>
                        <p className={styles.texto_negrito}>Preço (R$)</p>
                            <p className={styles.texto}> ̶R̶$̶4̶5̶,̶0̶0 R$35,00</p>

                        <p className={styles.texto_negrito}>Categoria</p>
                            <p className={styles.texto}>• Premium</p>
                            <p className={styles.texto}>• Artesanal</p>
                    </aside>
                </section>
            </main>
            <Footer/>
        </Fragment>
    )
}

export default Detalhe;