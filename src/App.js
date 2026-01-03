
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';


import Home from './pages/Home';
import RecipePage from './pages/RecipePage'; 


import './assets/css/style.css'; 

import RecipeList from './pages/RecipeList';

const App = () => {
  return (

    <Router>
      <div className="app-container">

        <Header />
        
        <main className="content">
          <Routes>

            <Route path="/" element={<Home />} />
            
 
            <Route path="/receita/:slug" element={<RecipePage />} />
            
            <Route path="/bolos" element={<RecipeList category="bolo" />} />
            <Route path="/salgados" element={<RecipeList category="salgado" />} />
            

            <Route path="*" element={<h2>404 - Página Não Encontrada</h2>} />
          </Routes>
        </main>


        <Footer />
      </div>
    </Router>
  );
};

export default App;