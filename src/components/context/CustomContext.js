import CartContext from "./CartContext";
import React, {useState, useEffect, useContext} from "react";


function CustomContext({children}) {

       
    let arr = []

    function addItem(value){
        arr.push(value)
    }

    function checkItem(params){
        return arr
    }

    

    return (
        <CartContext.Provider value={{addItem, checkItem}}>
            {children}            
        </CartContext.Provider>
    )
}

export default CustomContext;