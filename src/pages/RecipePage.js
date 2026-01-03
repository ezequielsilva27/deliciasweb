import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipesData from '../data/recipes.json';
import styles from './RecipePage.module.css'; 

const RecipePage = () => {

    const { slug } = useParams(); 
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {

        const foundRecipe = recipesData.find(r => r.slug === slug);
        setRecipe(foundRecipe);

        if (foundRecipe) {
            window.scrollTo(0, 0);
        }
    }, [slug]);

    if (!recipe) {
        return <h2 className="section-title">Receita Não Encontrada...</h2>;
    }

    const imageUrl = `/img/${recipe.slug}.jpg`; 

    const youtubeEmbedUrl = `https://www.youtube.com/embed/${recipe.youtubeId}`;

    return (
        <section className={styles.recipePage}>
            
            <h1 className={styles.recipeTitle}>{recipe.name}</h1>
            <p className={styles.recipeCategory}>Categoria: {recipe.category === 'bolo' ? 'Bolos e Doces' : 'Salgados'}</p>
            
            <div className={styles.mainContent}>
                
                <div className={styles.videoContainer}>
                    <iframe
                        src={youtubeEmbedUrl}
                        title={`Vídeo da Receita ${recipe.name}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className={styles.detailsContainer}>
                    <h2 className={styles.detailTitle}>Ingredientes</h2>
                    <ul className={styles.ingredientList}>
                        {recipe.ingredients.map((item, index) => (
                            <li key={index}>🎄 {item}</li>
                        ))}
                    </ul>

                    <h2 className={styles.detailTitle}>Modo de Preparo</h2>
                    <p className={styles.instructions}>{recipe.instructions}</p>
                </div>
            </div>

            <div className={styles.recipeImageWrapper}>
                <img src={imageUrl} alt={recipe.name} className={styles.recipeImage} />
            </div>

        </section>
    );
};

export default RecipePage;