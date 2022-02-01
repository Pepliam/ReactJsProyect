import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import FormControl from 'react-bootstrap/FormControl'
import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget'
import {NavLink} from 'react-router-dom'
import { CartState } from "./context/CartContext"
import "../styles/Styles.css";


function NavBarComponent(){
    
     const {
         productDispatch
     } = CartState();

           
    return (
    <Navbar className="navbarClass" bg="dark" variant="dark">
            <Container className="containerClass">                                           
                    <Navbar.Brand className="navbarTitle" href="/" ><img className="imgNav" alt="LogoRocket" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWUXy1IcSneOMzLgXwXGd0bUxJkrjYTslI9ms8ZrS_-3L4xT_Xq2Y9ZolQWiJupV43GsM&usqp=CAU"/> CASINO ROCKET</Navbar.Brand>
                    <Nav className="navClass">

                        <Nav.Link href="#home"><NavLink to="/Home">Home</NavLink></Nav.Link>                         
                        <Nav.Link href="#Cart"><NavLink to="/cart">Detalle Carrito</NavLink></Nav.Link>
                        <Navbar.Text>
                            <FormControl 
                            style={{width: 130}}
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