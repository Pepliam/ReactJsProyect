import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Item from './components/Item';



function App() {
  

  return (
    <BrowserRouter>
    <NavBarComponent/>
      <Routes>
        <Route exact path= "/category/StarWars" element= {<ItemListContainer/>}></Route>
        <Route exact path="/category/MercadoLibre" element= {<ItemDetailContainer/>}></Route>  
        <Route exact path="/item/:name" element= {<Item/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
