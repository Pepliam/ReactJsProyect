import React from 'react'
import "../styles/ItemListContainer.css"

const ItemListContainer = (props) => {
  return(  
    <div className="item-container">
      <p>{props.greeting}</p>
    </div>
   );
}

export default ItemListContainer;