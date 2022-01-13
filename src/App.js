import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartContext from './components/context/CartContext';



function App() {
  /*
  const [state, setState] = useState ([])
   
  window.addEventListener("clickDetalle", (e)=>{
  setState([...state,e.detail.event.target.innerText])
 })  
*/
    return (
      /*<CartContext.Provider value={state}>*/
    <CartContext.Provider>
    <BrowserRouter>    
    <NavBarComponent/>    
      <Routes>      
        <Route exact path= "/" element= {<ItemListContainer/>}></Route>
        <Route exact path= "/category/Products" element= {<ItemListContainer/>}></Route>     
        <Route exact path="/item/:name" element= {<ItemListContainer/>}></Route>
        <Route exact path="/cart" element= {<Cart/>}></Route>
      </Routes>
    </BrowserRouter>
    </CartContext.Provider>
  );
};

export default App;
