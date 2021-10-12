import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import SeccionCentral from './componentes/ItemListContainer/ItemListContainer';
import CartWidget from './componentes/CartWidget/CartWidget';
import carritoo from './componentes/Imagenes/carritoo.png'
import ItemCount from './componentes/ItemCount/ItemCount';
import React, {useState} from 'react';

function App() {
  const jsx = <h1>Fresh World</h1>
  return (
    <div>
       <NavBar/>
    <div>
      <SeccionCentral/>
    </div>
    <div>
           <ItemCount />   
              </div>
    </div>
  );
}

export default App;
