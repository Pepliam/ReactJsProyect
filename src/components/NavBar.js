import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Common from './Common'
import '../styles/NavBarStyles.css'
import CartWidget from './CartWidget';
import ItemListCointainer from './ItemListContainer';

function NavBarComponent(props){

    return (
    <Navbar bg="dark" variant="dark">
            <Container>
            <ItemListCointainer greeting="text"></ItemListCointainer>
                    <Navbar.Brand href="#home" >MI APP REACT</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#ejemplo">
                        <Common.TitleLabel text="Nosotros" className="color-texto-nav"></Common.TitleLabel>
                        </Nav.Link>
                    </Nav>               
            </Container>
   </Navbar>
    )
}

export default NavBarComponent;