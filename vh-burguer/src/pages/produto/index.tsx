import Footer from "@/components/footer/footer";
import HeaderMini from "@/components/header-mini/header-mini";
import { Fragment } from "react/jsx-runtime"
import styles from "./produto.module.css"
import Link from "next/link";

const Produto = () => {
    return (
        <Fragment>
            <HeaderMini/>
            <main id={styles.main}>
                <h1>CRIAR PRODUTO</h1>
                <form id={styles.form_container}>
                    <div className={styles.div_agrupar}>
                        <span>Nome do Produto</span>
                        <input type="text" placeholder="Big Monster"/>
                    </div>

                    <div className={styles.div_agrupar}>
                        <span>Descrição</span>
                        <input id={styles.input_des} type="text" placeholder="Uma versão superior do clássico Monster, só que MUITO maior."/>
                    </div>

                    <div className={styles.div_agrupar}>
                        <span>Preço (R$)</span>
                        <input type="number" placeholder="50.00"/>
                    </div>

                    <div className={styles.div_agrupar}>
                        <span>Categoria</span>
                        <select required>
                            <option value="" disabled selected hidden>Selecione a Categoria</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <Link id={styles.link} href="/categoria">Adicionar Categoria</Link>
                    </div>

                    <div className={styles.div_agrupar}>
                        <span>URL da Imagem</span>
                        <input type="text" placeholder="https://unsplash.com/pt-br/fotografias/big_monster"/>
                    </div>

                    <div id={styles.botoes}>
                        <button id={styles.btn_add}>Adicionar Promoção</button>
                        <button id={styles.btn_salvar}>Salvar</button>
                    </div>
                </form>
            </main>
            <Footer/>
        </Fragment>
    )
}

export default Produto;