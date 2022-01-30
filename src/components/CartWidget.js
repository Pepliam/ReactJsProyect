import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import Badge from 'react-bootstrap/Badge'
import { FaShoppingCart } from 'react-icons/fa'
import { CartState } from "./context/CartContext"
import { AiFillDelete } from "react-icons/ai"
import Styles from "../styles/Styles.css"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"


function CartWidget(){

  const {
    state: { cart },
    dispatch
  } = CartState();
  

    return(
      <>
       <Nav>
         <Dropdown alignRight>
           <Dropdown.Toggle variant="success">
             <FaShoppingCart fontSize="25px"/>
            <Badge>{cart.length}</Badge>           
           </Dropdown.Toggle>   

          <Dropdown.Menu>

            { cart.length > 0 ? (
              <>
                {cart.map((poke)=>(
                  <span className="cartitem" key={poke.id}>
                    <img
                      src={poke.image}
                      className="cartItemImg"
                      alt={poke.name}
                    />
                    
                    <div className="cartItemDetail">
                      <span>{poke.name}</span>
                      <span>${poke.price}</span>
                      <AiFillDelete
                      fontSize="20"
                      style={{cursor: "pointer"}}
                      onClick={()=>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: poke,
                        })
                      }
                    />
                    </div>
                    
                  </span>
                ))}
                <Link to="/cart">
                  <Button className="cartButton">
                      Ir al Carrito
                  </Button> 
                </Link>             
              </>
            ):(
            <span style={{padding: 10}}>Carrito Vacio!</span>
            )}
            
          </Dropdown.Menu>

          </Dropdown>
        </Nav>
          </> 
        )
}

export default CartWidget;