// src/componentes/Carousel/Carousel.js
import React, { useState, useEffect } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import recipes from '../../data/recipes.json'; 
import styles from './Carousel.module.css';

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (recipes.length === 0) return;

        const interval = setInterval(() => {
            setActiveIndex((current) =>
                (current + 1) % recipes.length
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const goToNext = () => {
        setActiveIndex((current) =>
            (current + 1) % recipes.length
        );
    };

    const goToPrev = () => {
        setActiveIndex((current) =>
            current === 0 ? recipes.length - 1 : current - 1
        );
    };

    const transformStyle = {
        transform: `translateX(-${activeIndex * 100}%)`,
    };

    return (
        <div className={styles.carouselWrapper}>
            {/* Botão Anterior */}
            <button
                className={`${styles.navButton} ${styles.prev}`}
                onClick={goToPrev}
                aria-label="Imagem anterior"
            >
                ❮
            </button>

            <div
                className={styles.carouselContent}
                style={transformStyle}
            >
                {recipes.map((recipe) => (
                    <div key={recipe.id} className={styles.carouselSlide}>
                        <RecipeCard recipe={recipe} />
                    </div>
                ))}
            </div>

            {/* Botão Próximo */}
            <button
                className={`${styles.navButton} ${styles.next}`}
                onClick={goToNext}
                aria-label="Próxima imagem"
            >
                ❯
            </button>

            <div className={styles.carouselDots}>
                {recipes.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.dot} ${index === activeIndex ? styles.active : ''}`}
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Ir para a receita ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
