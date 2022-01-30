import React from 'react';
import "../styles/ItemListContainer.css";
import { CartState} from "./context/CartContext";
import Item from "./Item";
import Filters from "./Filters";

const ItemListContainer = () => {
  
  const {
    state: {pokes},
    productState: { sort, byStock, searchQuery}
} = CartState();

const transformProducts = () => {
    let sortedProducts = pokes;

    if(sort) {
        sortedProducts = sortedProducts.sort((a,b)=>(
            sort === "lowToHigh" ? a.price - b.price : b.price - a.price
        ))
    };

    if (!byStock) {
        sortedProducts = sortedProducts.filter((poke)=> poke.inStock)
    };

    if (searchQuery) {
        sortedProducts = sortedProducts.filter((poke)=>
            poke.name.toLowerCase().includes(searchQuery)
        );
    };

    return sortedProducts;
};


return <div className="home">

    <Filters/>

    <div className="productContainer">
        {
        transformProducts().map((poke)=>{
            return <Item poke={poke} key={poke.id}/>
        })
        }
    </div>
</div>




};

export default ItemListContainer;