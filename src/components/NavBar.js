import React, {useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import '../styles/NavBarStyles.css'
import CartWidget from './CartWidget'
import {NavLink} from 'react-router-dom'



function NavBarComponent(props){
    
    const [state] = useState ("Home")
    
    const [state1] = useState ("Products")

    

        
    return (
    <Navbar bg="dark" variant="dark">
            <Container>                                           
                    <Navbar.Brand href="/" >REACT</Navbar.Brand>
                    <Nav className="me-auto">

                        <Nav.Link href="#home"><NavLink to="/">{state}</NavLink></Nav.Link>
                        <Nav.Link href="#Products"><NavLink to="/category/Products">{state1}</NavLink></Nav.Link> 
                                                
                    </Nav>   
                    <CartWidget/>            
            </Container>
   </Navbar>
    )
}

export default NavBarComponent;