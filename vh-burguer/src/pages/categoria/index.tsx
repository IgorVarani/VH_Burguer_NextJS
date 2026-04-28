import { Fragment } from "react/jsx-runtime"
import styles from "./categoria.module.css"
import HeaderMini from "@/components/header-mini/header-mini";
import Footer from "@/components/footer/footer";
import React, { useState } from "react";
import { cadastrarCategoria } from "../api/categoriaService";

const Categoria = () => {

    const[categoria, setCategoria] = useState<string>("");

    function cadastrar(e: React.FormEvent<HTMLFormElement>)
    {
        e.preventDefault();
        cadastrarCategoria(categoria);
    }

    return (
        <Fragment>
            <HeaderMini/>
            <main id={styles.main}>
                <h1>CRIAR CATEGORIA</h1>
                <form id={styles.form_container} onSubmit={cadastrar}>
                    <div className={styles.div_agrupar}>
                        <span>Nome da Categoria</span>
                        <input type="text" placeholder="Premium"
                        value={categoria} onChange={(e) => setCategoria(e.target.value)}/>
                    </div>

                    <div id={styles.botoes}>
                        <button id={styles.btn_salvar}>Salvar</button>
                        <button id={styles.btn_cancelar}>Cancelar</button>
                    </div>
                </form>
            </main>
            <Footer/>
        </Fragment>
    )
}

export default Categoria;