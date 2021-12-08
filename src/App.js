import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBar'
import Shell from './components/Shell';
import ItemListCointainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';


function App() {
  return (
    <React.Fragment className="App">     
        
        <NavBarComponent >        
          <div><CartWidget/></div>
          <div><ItemListCointainer/></div>
          <div>3</div>
          <div>4</div>
        </NavBarComponent>        
        <Shell>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </Shell>
    </React.Fragment>
  );
}

export default App;
