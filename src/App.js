import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBar'
import ItemList from './components/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';



function App() {
  
  
    return (
      
    
    <BrowserRouter>    
    <NavBarComponent/>    
      <Routes>      
        <Route exact path= "/" element= {<ItemList/>}></Route>
        <Route exact path= "/Home" element= {<ItemList/>}></Route>            
        <Route exact path="/cart" element= {<Cart/>}></Route>
        <Route exact path= "/Products" element= {<ItemDetailContainer/>}></Route> 
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;
