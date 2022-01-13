import React, {useState, useEffect, useParams} from 'react';
import '../styles/ItemList.css';
import {NavLink} from 'react-router-dom';
import { doc, getDoc, getFirestore} from "firebase/firestore";
import Item from "./Item";


const ItemList = () => {
     
    const [products] = useState([
        {
            name:`Producto A`,
            cost: `$3000`,
            image: `https://static8.depositphotos.com/1338574/829/i/600/depositphotos_8292799-stock-photo-the-letter-a.jpg`
    
        },
        {
            name:`Producto B`,
            cost: `$5000`,
            image: `https://static8.depositphotos.com/1338574/829/i/950/depositphotos_8292937-stock-photo-the-letter-b-in-gold.jpg`
    
        }
    ])
const [cart, setCart] = useState([])
const [page, setPage] = useState(`products`)


const addToCart = (product) =>{
    setCart([...cart, {...product}]);
};

const removeFromCart = (productToRemove) => {

    setCart(cart.filter(product => product !== productToRemove))
};

const navigateTo = (nextPage) => {
    setPage(nextPage);
};


const renderProducts = () => (
    <>
    <h1>Products</h1>
    {products.map((product)=>(
                <>
                
                <div className="products">
                    
                    <h2>{product.name}</h2>
                    <h3>{product.cost}</h3>
                    <img src={product.image} alt={product.name}/>  
                    </div>
                    <Item/>
                    <button onClick={()=> addToCart(product)}>Add to Cart</button>
                    
                    
                </>
            ))}
    </>
);

const renderCart = () => (
    <>
    <h1>Cart</h1>
    {cart.map((product)=>(
                <>
                
                <div className="products">
                    <Item/>
                    <h2>{product.name}</h2>
                    <h3>{product.cost}</h3>
                    <img src={product.image} alt={product.name}/>  
                    </div>
                    <button onClick={()=> removeFromCart(product)}>Remove</button>
                    
                    
                </>
            ))}
    </>

)



    

  /*const [state, setState] = useState ([])  

    const handleClick = (e)=>{
      console.log("entro click")
      const event = new CustomEvent ("clickDetalle",{detail:{data: "test", event: e}})
      window.dispatchEvent(event)
  }

*/


/*
     
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
*/





    return(
        <>          {/*           
            {state.map((value)=>{
                 return <div><NavLink to={`/item/${value.name}`} onClick={handleClick}>
                     {value.name}</NavLink></div>
            })}

        */}

<div>
<button onClick={() => navigateTo(`cart`)}> Go To cart ({cart.length})</button>
</div>

<div>
<button onClick={() => navigateTo(`products`)}> View Products</button>
</div>

<div>
    {page === `products` && renderProducts()}
    {page === `cart` && renderCart()}
</div>
            
       
            
            
                        
        </>
    )
}

export default ItemList;
