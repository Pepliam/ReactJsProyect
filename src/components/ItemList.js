import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import '../styles/ItemList.css';
import {NavLink} from 'react-router-dom';

const ItemList = (props) => {
    
  const {name} = useParams() 

  const [state, setState] = useState ([])

  
  const getAPI = async () =>{
      let API, res;
      switch (name) {
            case "Notebook":
                API = await fetch("https://www.swapi.tech/api/people/")
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
      getAPI(name).then((res)=>setState(res))
      return getAPI(name).then((res)=>setState(res))
    },[name])

    return(
        <>                     
            {state.map((value)=>{
                 return <div><NavLink to={`/item/${value.name}`}>{value.name}</NavLink></div>
            })}     
        </>
    )
}

export default ItemList;
