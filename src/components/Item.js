import {useParams} from 'react-router-dom'
import CartContext from "../components/context/CartContext"
import React, {useContext} from 'react';


export default function Items (){

    
    const valueContext = useContext (CartContext)   
    const {name} = useParams()
   
  

    return(
        <div>
            Nombre Item: {name}  
                       
            <div>
            <h1>Personajes Agregados</h1>
            {valueContext.map((value)=><p>{value}</p>)}
        </div>
        </div>
    )
}