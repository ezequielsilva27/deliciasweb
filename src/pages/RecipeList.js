import React, { useEffect } from 'react';
import RecipeCard from '../componentes/RecipeCard/RecipeCard';
import recipesData from '../data/recipes.json';
import styles from './RecipeList.module.css'; 

const RecipeList = ({ category }) => {
    
    const filteredRecipes = recipesData.filter(recipe => recipe.category === category);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [category]);

    const titleMap = {
        'bolo': 'Nossos Bolos e Doces Festivos 🎂',
        'salgado': 'Nossos Salgados Para sua Ceia 🍗'
    };
    
    const pageTitle = titleMap[category] || 'Lista de Receitas';

    return (
        <section className={styles.recipeListContainer}>
            <h1 className={styles.listTitle}>{pageTitle}</h1>
            
            <div className={styles.cardGrid}>
                {filteredRecipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
            
            {filteredRecipes.length === 0 && (
                <p className={styles.noRecipes}>Nenhuma receita encontrada nesta categoria.</p>
            )}
        </section>
    );
};

export default RecipeList;