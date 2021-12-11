import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBar'
import Shell from './components/Shell';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import CartWidget from './components/CartWidget';


function App() {
  const [value, setValue] = useState(0);
  
  const [showModal, setShowModal] = useState(false)
  
  const resta= (minstock, value) => {
    if(value > minstock) setValue(prev => prev -1);
  } ;

  const Modal = () => {
    return (
      <div><h5>Maximo alcanzado!</h5></div>
    );
  };

  const suma = (stock, value) => {
    if(value < stock) setValue(prev => prev + 1);
    else setShowModal((prev) => !prev);
  };
  
  return (
    <React.Fragment className="App">     
        
      <NavBarComponent >       
        <div>1</div>
        <div>2</div>
      </NavBarComponent> 
      <div><ItemListContainer greeting="Contador"/></div>
      <div><CartWidget/></div>
      <div><ItemCount initialValue={value} restar={resta} sumar={suma}/>
      {showModal && <Modal />}
      </div>
      <Shell>
        <div>1</div>
        <div>2</div>
      </Shell>
    </React.Fragment>
  );
}

export default App;
