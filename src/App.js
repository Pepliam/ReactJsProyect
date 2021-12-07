import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BarraNav from './components/BarraNav';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const styles = {
    color: `red`,
    backgroundColor: "white"
  }
  return (
      <>
        <BarraNav/>
        <ItemListContainer greeting="text"></ItemListContainer>
        <div className="container" style={styles}>
          
        </div>

      </>
  );
}



export default App;
