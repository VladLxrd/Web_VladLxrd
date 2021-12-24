

import React from 'react';
import './style_irn.css';
import Header from './components_2.0/Head';
import Ssilki from './components_2.0/Ssilk';
import { Button } from "react-bootstrap"
import Centr from './components_2.0/Center';
import Footer from './components_2.0/Foot';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactDOM from 'react-dom';
import Recept1 from '../src/pages/Recept1'
import Recept2 from '../src/pages/Recept2'
import Home from '../src/pages/Home'




const App=()=> {
  return (
    <body>
      
      <Header />
   
        
      <Centr />
     <Footer/>
      </body>


  
  );
}

export default App;
