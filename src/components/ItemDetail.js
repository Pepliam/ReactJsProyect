import React, {useState, useEffect} from "react";
import ItemCount from "./ItemCount";

function ItemDetail(){
        
    /*logica api*/
    const [item,setItem] = useState ({});
    
    
    useEffect ( ()=>{
        db()
    }, [])

    const db = async () => {
        const call = await fetch (
            "https://api.mercadolibre.com/sites/MLA/search?q=pokemon"
        );
        if(call.ok) {
            const response = await call.json();
            setItem(response.results.find(item => item.price > 5000));
        } else {
            call.catch ((err) => {
                throw new Error ("Algo salio mal", err);
            });
        }
    };
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


  window.addEventListener("onAdd", ()=>{
    console.log("borrar count")
  })
  return(
        <>
        <div>
            {item?.length ?? (
                <div>
                    <p>{item.title}</p>
                    <img src={item.thumbnail} />
                    <p>{item.price}</p>
                </div>    
            )}
        </div>

        <ItemCount initialValue={value} restar={resta} sumar={suma}/>
        {showModal && <Modal/>};

        </>
    )
}
export default ItemDetail
