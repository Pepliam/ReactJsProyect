import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import FormControl from 'react-bootstrap/FormControl'
import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget'
import {NavLink} from 'react-router-dom'
import { CartState } from "./context/CartContext"



function NavBarComponent(){
    
     const {
         productDispatch
     } = CartState();

           
    return (
    <Navbar bg="dark" variant="dark" style={{ height: 90}}>
            <Container>                                           
                    <Navbar.Brand href="/" >CASINO ROCKET</Navbar.Brand>
                    <Nav className="me-auto">

                        <Nav.Link href="#home"><NavLink to="/Home">Home</NavLink></Nav.Link>
                        <Nav.Link href="#Products"><NavLink to="/Products">Products Firebase</NavLink></Nav.Link> 
                        <Nav.Link href="#Cart"><NavLink to="/cart">Carrito</NavLink></Nav.Link>
                        <Navbar.Text>
                            <FormControl 
                            style={{width: 150}}
                            placeholder="Busqueda"
                            className="m-auto"
                            onChange={(e)=>
                                productDispatch({
                                    type: "FILTER_BY_SEARCH",
                                    payload: e.target.value,
                                })
                            }
                            ></FormControl>    
                        </Navbar.Text>                     
                    </Nav>   
                    <CartWidget/>            
            </Container>
   </Navbar>
    )
}

export default NavBarComponent;