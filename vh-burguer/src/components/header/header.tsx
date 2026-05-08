import Link from "next/link";
import styles from "./header.module.css";
import { useState } from "react";

const Header = () =>{

    const[menuAberto, setMenuAberto] = useState(false);

    function mostrarMenu()
    {
        setMenuAberto(!menuAberto);
    }


    return (
        <header id={styles.header}>
            <div className={`${styles.container} layout_guide`}>
                <img id={styles.logo} src="../imgs/Logo_VH_Burguer.svg" alt="Logo do VH Burguer" />
                <nav id={styles.nav_menu} className={menuAberto? styles.nav_menu_aberto : styles.nav_menu}>
                    <a href="#destaques">Destaques</a>
                    <a href="#cardapio">Cardápio</a>
                    <a href="#unidades">Unidades</a>
                    <Link href="/login">Login</Link>
                </nav>
                <button id={styles.btn_icon} onClick={mostrarMenu}>
                <img src="../imgs/Icon_Hamburguer.svg" alt="Ícone que representa um hambúrguer clicável" />
                </button>
            </div>
        </header>
    )
}

export default Header;