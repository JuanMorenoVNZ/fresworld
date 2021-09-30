import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import SeccionCentral from './componentes/NavBar/ItemListContainer/ItemListContainer';
import CartWidget from './componentes/NavBar/CartWidget/CartWidget';
import carritoo from './componentes/NavBar/Imagenes/carritoo.png'

function App() {
  const jsx = <h1>Fresh World</h1>
  return (
    <div>
       <NavBar/>
    <div>
      <SeccionCentral/>
    </div>
    <div>
              
              </div>
    </div>
  );
}

export default App;
