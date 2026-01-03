// src/componentes/Footer/Footer.js
import React from 'react';
import styles from './Footer.module.css'; // Importa o CSS Module

const Footer = () => {
    return (
        <footer className={styles.mainFooter}>
            <p className={styles.footerText}>
                &copy; {new Date().getFullYear()} DelíciasWeb. Sabor e Magia no seu Natal.
            </p>
        </footer>
    );
};

export default Footer;