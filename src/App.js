import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Item from './components/Item';
import Cart from './components/Cart';
import CartContext from './components/context/CartContext';
import CustomContext from './components/context/CustomContext';


function App() {
  
  const [state, setState] = useState ([])
   
  window.addEventListener("clickDetalle", (e)=>{
  setState([...state,e.detail.event.target.innerText])
 })

    return (
    <CartContext.Provider value={state}>
    <BrowserRouter>    
    <NavBarComponent/>    
      <Routes>      
        <Route exact path= "/" element= {<ItemDetailContainer/>}></Route>
        <Route exact path= "/category/Personajes" element= {<ItemListContainer/>}></Route>     
        <Route exact path= "/category/Planetas" element= {<ItemListContainer/>}></Route>  
        <Route exact path= "/category/Especies" element= {<ItemListContainer/>}></Route> 
        <Route exact path="/item/:name" element= {<Item/>}></Route>
        <Route exact path="/cart" element= {<Cart/>}></Route>
      </Routes>
    </BrowserRouter>
    </CartContext.Provider>
  );
};

export default App;
