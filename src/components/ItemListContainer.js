import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import "../styles/ItemListContainer.css";
import ItemList from "./ItemList";


const ItemListContainer = () => {

  return( 
    <> 
      <Container>

        <ItemList/>  

      </Container>
    </>
  )
}

export default ItemListContainer;