import CartContext from "./CartContext";
import React, {useState} from "react";


function CustomContext({children}) {

    const [state, setState] = useState ([])
   
    window.addEventListener("clickDetalle", (e)=>{
    setState([...state,e.detail.event.target.innerText])
   })

   

    return (
        <CartContext.Provider value={state}>
            {children}            
        </CartContext.Provider>
    )
}

export default CustomContext;