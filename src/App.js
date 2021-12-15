import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBar'
import ItemList from './components/ItemList';
import ItemListContainer from './components/ItemListContainer';


function App() {
  
  return (
    <React.Fragment className="App">        
      <NavBarComponent/>      
      <ItemListContainer greeting="Contador"/>
      <ItemList/>      
      
    </React.Fragment>
  );
}

export default App;
