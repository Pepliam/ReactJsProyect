import React, {useState, useContext} from "react";
import ItemCount from "./ItemCount";
import CartContext from "./context/CartContext";

function ItemDetail(){       
        
    
    const handleClick = ()=>{
        return {} /*logica para guardar producto y cantidad como objeto en cart*/
    }


/*------------------------------------------------*/

    /*logica modal, y funcionamiento ITEMCOUNT*/
    const [value, setValue] = useState(0);
    const [showModal, setShowModal] = useState(false);

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
/*------------------------------------------------*/



    return(
        <>
        
        <ItemCount initialValue={value} restar={resta} sumar={suma}/>
        {showModal && <Modal/>};
        <a href="/Cart">
            <button onClick={handleClick}>Terminar Compra</button>
        </a>
       
        </>
    )
}
export default ItemDetail
