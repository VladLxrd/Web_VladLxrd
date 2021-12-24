import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Recept1 from '../pages/Recept1'
import Recept2 from '../pages/Recept2'
import Home from '../pages/Home'

const Header =()=>{
    return(
        <div>
        <nav class ="navbar navbar-expand-lg navbar-dark bg-dark myclass" > 
            <div class="container-fluid">
                
                    <a class ="navbar-brand" href ='#'>Мои рецепты</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>


                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class ="navbar-nav">
                        
                        <li class ="nav-item"><a class="nav-link active" href = "/">Главная</a></li>
                        <li class ="nav-item"><a class="nav-link" href = "https://www.russianfood.com/recipes/recipe.php?rid=123433">Мой любимый салат</a></li>
                        <li class ="nav-item"><a class="nav-link" href = "https://www.russianfood.com/recipes/recipe.php?rid=132731">Мое любимое печенье</a></li>
                    </ul>


        
            </div>
        </div>
        </nav>

        </div>
    );
}
export default Header;