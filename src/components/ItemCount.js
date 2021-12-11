import React from "react";
import "../styles/ItemCount.css";



const ItemCount = ({initialValue = 0, stock = 5, minstock = 0, restar, sumar}) => {
    return(
        <div className="buttons-container">
            <button className="button-add" onClick={() => sumar(stock, initialValue)}>
                SUMAR
            </button>
            <p className="value">{initialValue}</p>
            <button className="button-sub" onClick={() => restar(minstock, initialValue)}>
                RESTAR
            </button>
        </div>
    );
};



export default ItemCount;