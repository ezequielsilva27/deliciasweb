// src/componentes/Header/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; // Importa o CSS Module

const Header = () => {
    return (
        <header className={styles.mainHeader}>
            {/* Logo e Nome da Empresa (Requisito 5) */}
            <Link to="/" className={styles.logo}>
                DelíciasWeb
            </Link>
            
            <nav>
                <ul className={styles.navList}>
                    {/* Links de navegação */}
                    <li><Link to="/" className={styles.navLink}>Home</Link></li>
                    <li><Link to="/bolos" className={styles.navLink}>Bolos</Link></li>
                    <li><Link to="/salgados" className={styles.navLink}>Salgados</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;