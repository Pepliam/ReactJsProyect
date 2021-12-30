import React from "react";
import "../styles/ItemCount.css";



const ItemCount = ({initialValue = 0, stock = 5, minstock = 0, restar, sumar}) => {

    /*const onAdd = new CustomEvent ("EventCount")
    const handleClick = (evn)=>{        
        window.dispatchEvent(onAdd)
        console.log(evn)
    }*/  
    
    /*en lugar de esto, hacer FUNCION QUE TOME EL VALOR DEL OBJETO DONDE PRESIONO Y LA CANTIDAD, y agrego esa funcion al onClick del boton
    luego, esa funcion de la paso al context para tenerla disponible para todos los componentes
    */


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
        
    </>
    );
};



export default ItemCount;


