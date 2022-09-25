import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Componentes/Header/header';
import Banner from './Componentes/Banner/Banner';
import Descripcion from './Componentes/Descripcion/Descripcion';
import Feature from './Componentes/Feature/Feature';
import Ubicacion from './Componentes/Ubicación/Ubicacion';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Banner/>
    <Descripcion/>
    <Feature/>
    <Ubicacion/>
  </React.StrictMode>
);
