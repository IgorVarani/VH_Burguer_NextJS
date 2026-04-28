import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import styles from "./login.module.css"
import { login } from "../api/authService";

//? ESTRUTURA PADRÃO
const Login = () => {

    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    
    function autenticar(e: React.FormEvent<HTMLFormElement>)
    {
        e.preventDefault();
        try
        {
            login(email, senha);
            console.log("Tentei.");
        }
        catch(e: any)
        {
            alert(e.message);
        }
    }

    return (
        <Fragment>
            <main id={styles.main}>
                <img src="/imgs/Hamburguer_Login.png" alt="Hambúrguer com ingredientes flutuando."/>
                <div id={styles.campo_login}>
                    <h1>Login</h1>
                    <form id={styles.formulario} onSubmit={autenticar}>
                        <div className={styles.campo_form}>
                            <label htmlFor="email">E-mail</label>
                            <input type="text" name="email" placeholder="email@exemplo.com"
                            value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        
                        <div className={styles.campo_form}>
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" placeholder="********"
                            value={senha} onChange={(e) => setSenha(e.target.value)}/>
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