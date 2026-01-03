// src/componentes/RecipeCard/RecipeCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RecipeCard.module.css'; // Importa o CSS Module

const RecipeCard = ({ recipe }) => {
    
    // Tentativa 1 (Método Padrão com Caminho Público)
    // O React/Webpack deve entender que '/assets/img/' está na pasta pública.
    const imageUrl = `/img/${recipe.slug}.jpg`; 

    // Se o método acima falhar, você pode tentar o Método 2 (Import dinâmico), 
    // mas o Método 1 é o padrão em projetos React sem eject.

    return (
        <div className={styles.recipeCard}>
            
            {/* 1. IMAGEM: Usa o caminho dinâmico baseado no slug (ex: bolo-cenoura.jpg) */}
            <img 
                src={imageUrl} 
                alt={recipe.name} 
                className={styles.cardImage} 
                // TRATAMENTO DE ERRO: Se a imagem falhar ao carregar, exibe um ícone (Opcional, mas útil)
                onError={(e) => { 
                    e.target.onerror = null; 
                    e.target.src = "https://via.placeholder.com/300x180?text=Sem+Imagem"; // Placeholder
                }}
            />
            
            <div className={styles.cardInfo}>
                <h3>{recipe.name}</h3>
                <p className={styles.cardCategory}>{recipe.category === 'bolo' ? 'Bolo/Doce' : 'Salgado'}</p>
                
                {/* O link usa o slug para navegar para a página de detalhes */}
                <Link to={`/receita/${recipe.slug}`} className={styles.btnViewRecipe}>
                    Ver Receita
                </Link>
            </div>
        </div>
    );
};

export default RecipeCard;