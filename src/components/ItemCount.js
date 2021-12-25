import React from "react";
import "../styles/ItemCount.css";



const ItemCount = ({initialValue = 0, stock = 5, minstock = 0, restar, sumar}) => {

    const onAdd = new CustomEvent ("EventCount")
    const handleClick = (evn)=>{        
        window.dispatchEvent(onAdd)
        console.log(evn)
    }


    return(
    <>
        <div className="buttons-container">
            <button className="button-add" onClick={() => sumar(stock, initialValue)}>
                +
            </button>
            <p className="value">{initialValue}</p>
            <button className="button-sub" onClick={() => restar(minstock, initialValue)}>
                -
            </button>
        </div>
        <a href="/Cart">
            <button onClick={handleClick}>Terminar Compra</button>
        </a>
        </>
    );
};



export default ItemCount;


