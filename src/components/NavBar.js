import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/container'
import Nav from 'react-bootstrap/Nav'
import Common from "./Common";
import CartWidget from "./CartWidget";

function NavBar() {
    return ( 
        <NavBar>
            <Container>
                <CartWidget></CartWidget>
                <Nav class = "navbar navbar-expand-sm bg-light">
                    <ul class = "navbar-nav">
                        <li class = "nav-item">
                          <a class = "nav-link"> <Common.TitleLabel text="REACT APP"></Common.TitleLabel> </a></li> 
                        <li class = "nav-item">
                           <a class = "nav-link"> Link 2 </a></li>
                        <li class = "nav-item">
                           <a class = "nav-link"> Link 3 </a></li>
                    </ul>
                </Nav>
            </Container>
        </NavBar>

    )
}

export default NavBar;