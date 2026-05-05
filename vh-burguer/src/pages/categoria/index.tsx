import { Fragment } from "react/jsx-runtime"
import styles from "./categoria.module.css"
import HeaderMini from "@/components/header-mini/header-mini";
import Footer from "@/components/footer/footer";
import React, { useState } from "react";
import { cadastrarCategoria } from "../api/categoriaService";
import { toast, ToastContainer } from "react-toastify";

const Categoria = () => {

    const[categoria, setCategoria] = useState<string>("");

    const notificacao = (msg: string) => toast.success(msg);
    const erro = (msg: string) => toast.error(msg);

    async function cadastrar(e: React.FormEvent<HTMLFormElement>)
    {
        e.preventDefault();
        try
        {
            await cadastrarCategoria(categoria);
            notificacao("Cadastro realizado com sucesso!");
        }
        catch(error: any)
        {
            erro(error.message);
        }
    }

    return (
        <Fragment>
            <ToastContainer/>
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
                    </div>
                </form>
            </main>
            <Footer/>
        </Fragment>
    )
}

export default Categoria;