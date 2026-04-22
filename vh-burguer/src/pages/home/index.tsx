//? ESTRUTURA PADRÃO

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import styles from "./home.module.css"
import { Fragment } from "react/jsx-runtime"
import ListaProduto from "@/components/lista-produto/lista-produto";

const Home = () => {
    return (
        <Fragment>
            <Header/>
            <main id={styles.main}>
                <section id={styles.banner}>
                    <h1>BEM-VINDO(A) AO VH BURGUER</h1>
                    <img src="../imgs/Foto_de_Hamburgueres.svg" alt="Um grupo com três hambúrgueres abaixo do título" />
                    
                    <div id={styles.botoes}>
                        <button id={styles.btn_chamar}>Chamar Atendente</button>
                        <button id={styles.btn_ver}>Ver Cardápio</button>
                    </div>
                </section>

                <section id={styles.destaques}>
                    <div className={`${styles.container_destaques} layout_guide`}>
                        <article className={styles.card_destaque_mais_pedidos}>
                            <p>Os queridinhos da galera</p>
                            <p className={styles.destaque}>mais pedidos</p>
                        </article>

                        <div className={styles.cards_direita}>
                            <article className={styles.card_destaque_muito_bacon}>
                                <p>Lanches com</p>
                                <p className={styles.destaque}>muito bacon</p>
                            </article>
                            
                            <article className={styles.card_destaque_super_combos}>
                                <p>Se tiver muita fome</p>
                                <p className={styles.destaque}>Super combos</p>
                            </article>
                        </div>
                    </div>
                </section>

                <section id={styles.cardapio}>
                    <div className={`${styles.container_cardapio} layout_guide`}>
                        <h2>CARDÁPIO</h2>
                        <ListaProduto/>
                    </div>
                </section>

                <section id={styles.unidades}>
                    <div className={`${styles.container_unidades} layout_guide`}>
                        <div className={styles.texto_unidades}>
                            <h3>NOSSAS UNIDADES</h3>
                            <ul className={styles.lista_unidades}>
                                <li>Centro - Av. Aurora, 742</li>
                                <li>Jardim - Av. das Palmeiras, 1280</li>
                                <li>Norte - Av. Horizonte, 305</li>
                                <li>Sul - Av. Nova Esperança, 910</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </Fragment>
    )
}

export default Home;