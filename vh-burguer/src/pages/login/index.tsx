import { Fragment } from "react/jsx-runtime";
import styles from "./login.module.css"

//? ESTRUTURA PADRÃO
const Login = () => {
    return (
        <Fragment>
            <main id={styles.main}>
                <img src="/imgs/Hamburguer_Login.png" alt="Hambúrguer com ingredientes flutuando."/>
                <div id={styles.campo_login}>
                    <h1>Login</h1>
                    <form id={styles.formulario}>
                        <div className={styles.campo_form}>
                            <label htmlFor="email">E-mail</label>
                            <input type="text" name="email" placeholder="email@exemplo.com"/>
                        </div>
                        
                        <div className={styles.campo_form}>
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" placeholder="********"/>
                        </div>

                        <div id={styles.container_senha}>
                            <a href="" id={styles.esq_senha}>Esqueceu sua senha?</a>
                            <button>Entrar</button>
                        </div>
                    </form>
                </div>
            </main>
        </Fragment>
    );
}

export default Login;