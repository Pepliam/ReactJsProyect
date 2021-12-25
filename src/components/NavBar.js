import React, {useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import '../styles/NavBarStyles.css'
import CartWidget from './CartWidget'
import {NavLink} from 'react-router-dom'



function NavBarComponent(props){
    
    const [state] = useState ("Home")
    
    const [state1] = useState ("MercadoLibre")

    const [state2] = useState ("StarWars")

        
    return (
    <Navbar bg="dark" variant="dark">
            <Container>                                           
                    <Navbar.Brand href="/" >MIAPP REACT</Navbar.Brand>
                    <Nav className="me-auto">

                        <Nav.Link href="#home"><NavLink to="/">{state}</NavLink></Nav.Link>
                        <Nav.Link href="#MercadoLibre"><NavLink to="/category/MercadoLibre">{state1}</NavLink></Nav.Link> 
                        <Nav.Link href="#StarWars"><NavLink to="/category/StarWars">{state2}</NavLink></Nav.Link>
                        
                        
                    </Nav>   
                    <CartWidget/>            
            </Container>
   </Navbar>
    )
}

export default NavBarComponent;