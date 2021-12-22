import React, {useState} from "react";
import ItemCount from "./ItemCount";

const ItemDetail = () =>{

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
        </>
    )
}
export default ItemDetail
