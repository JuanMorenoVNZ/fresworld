import React, {useState} from 'react';
import '../NavBar/NavBar.css'
import './ItemCount.css'
import hamburguesa from '../Imagenes/hamburguesa.png'

const ItemCount = () => {
    
    const [estado, setEstado] = useState(1);
    

    const sumarValor = () => {
        setEstado(estado + 1  )

        
    } 

    const restarValor = () => {
        setEstado(estado - 1)
        if((estado <= -0)){alert("Presiona el signo de + para poder tener una cantidad permitida");}
        
    }

    const ingresarValor = () => {
        setEstado(estado + parseInt(prompt("ingresa una cantidad")) )

        
    }

    if ((estado >= 11)){alert("No contamos con la cantidad requerida")}

    return (
        <main class="main">
            <section className="sectionMain">
                <div className="menuDiv">
                     <div className="card" >
                         <img src={hamburguesa} className="card-img-top" alt="imagen-comida" />
                           <div className="card-body">
                            <h5 className="card-title">Burger fusión</h5>
            
                            <div class="btn-group" role="group" aria-label="Basic example">
                                 <button type="button" className="btn btn-secondary" onClick={() => restarValor()<10}>-</button>
                                 <button className="btn btn-secondary" onClick={() => ingresarValor()}> 
                                  {estado}
                                 </button>
                                 <button type="button" className="btn btn-secondary" onClick={() => sumarValor()}>+</button>
                            </div>
                           </div>
                      </div>
                </div>
           </section>
       </main>
    
)

};

export default ItemCount;