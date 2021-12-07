import React from 'react';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Common from "./Common";
import CartWidget from "./CartWidget";

function BarraNav() {
    return ( 
        <BarraNav>
            <Container>
                <CartWidget/>
                <Nav className = "navbar navbar-expand-sm bg-light">
                    <ul className = "navbar-nav">
                        <li className = "nav-item">
                          <a href="#" className = "nav-link"> <Common.TitleLabel text="REACT APP"></Common.TitleLabel> </a></li> 
                        <li className = "nav-item">
                           <a href="#" className = "nav-link"> Link 2 </a></li>
                        <li className = "nav-item">
                           <a href="#" className = "nav-link"> Link 3 </a></li>
                    </ul>
                </Nav>
            </Container>
        </BarraNav>

    )
}

export default BarraNav;