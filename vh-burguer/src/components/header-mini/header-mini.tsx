import Link from "next/link";
import styles from "./header-mini.module.css";

const HeaderMini = () => {
    return (
        <header id={styles.header}>
            <div className={`${styles.container} layout_guide`}>
                <img id={styles.logo} src="../imgs/Logo_Footer.svg" alt="Logo do VH Burguer" />
                <nav id={styles.nav_menu}>
                    <Link href="/home">Voltar</Link>
                </nav>
                <button id={styles.btn_icon}>
                <img src="../imgs/Icon_Hamburguer.svg" alt="Ícone que representa um hambúrguer clicável" />
                </button>
            </div>
        </header>
    )
}

export default HeaderMini