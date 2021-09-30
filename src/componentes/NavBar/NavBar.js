import React from 'react';
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import CartWidget from './CartWidget/CartWidget';
import fresh from './Imagenes/fresh.jpg'



function NavBar() {
  
  return (
    <div className="NavBar">
        <Navbar bg="black" variant="dark" sticky="top" expand="sm" collapseOnSelect>
            <Navbar.Brand>
                <img src={fresh} width="70px" height="60px"/>
                Fresh world

                
                
            </Navbar.Brand>
            
         
        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Productos">
              <NavDropdown.Item href="#frutas">Frutas</NavDropdown.Item>
              <NavDropdown.Item href="#cafee">Cafe</NavDropdown.Item>
              <NavDropdown.Item href="#carnes">Carnes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#promociones">Promociones</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#galeria">Galeria</Nav.Link>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <Nav.Link href="#carrito"  ><CartWidget /> </Nav.Link>
           
     
            
           
          </Nav>
        </Navbar.Collapse>
        
        </Navbar>

        
      
    </div>
  );
}

export default NavBar;