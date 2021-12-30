import React, {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import '../styles/ItemList.css';
import {NavLink} from 'react-router-dom';
import CustomContext from "./context/CustomContext";
import CartContext from "./context/CartContext";

const ItemList = (props) => {
     

    
  const [state, setState] = useState ([])  

    const handleClick = (e)=>{
      console.log("entro click")
      const event = new CustomEvent ("clickDetalle",{detail:{data: "test", event: e}})
      window.dispatchEvent(event)
  }
     
  const getAPI = async (name) =>{
      let API, res;
      switch (name) {
            case "Personajes":
                API = await fetch("https://www.swapi.tech/api/people/")
                res = await API.json()
                res = res.results
                break;

            case "Planetas":
                API = await fetch("https://www.swapi.tech/api/planets/")
                res = await API.json()
                res = res.results
                break;
            
            case "Especies":
                API = await fetch("https://www.swapi.tech/api/species/")
                res = await API.json()
                res = res.results
                break;
            

            default:
                API = await fetch("https://www.swapi.tech/api/people/")
                res = await API.json()
                res = res.results
                break;

        }return res
    }

    useEffect(()=>{
      getAPI("Personajes").then((res)=>setState(res))
      return getAPI("Personajes").then((res)=>setState(res))
    },[])

    return(
        <>                     
            {state.map((value)=>{
                 return <div><NavLink to={`/item/${value.name}`} onClick={handleClick}>
                     {value.name}</NavLink></div>
            })}
            
            
            
                        
        </>
    )
}

export default ItemList;
