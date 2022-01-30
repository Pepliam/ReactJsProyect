import { Card, Button } from "react-bootstrap"
import { CartState } from "./context/CartContext"
import "../styles/Styles.css";



const Item = ({poke})=> {


  const { 
      state: { cart },
      dispatch,
  } = CartState()


  return (
          <div className="products">
              <Card className="card">
                  <Card.Img className="cardimg" variant="top" src={poke.image} alt={poke.name}/>

                  <Card.Body>

                      <Card.Title>
                          {poke.name}
                      </Card.Title>

                      <Card.Subtitle>
                          ${poke.price}
                      </Card.Subtitle>
                      <br></br>

                      {
                          cart.some(p=>p.id===poke.id) ? (
                          <Button
                           onClick={()=>{
                              dispatch({
                                  type: "REMOVE_FROM_CART",
                                  payload: poke,
                              });                                
                              }}
                              variant="danger">
                              Remover del Carrito
                          </Button>

                          ) : (

                          <Button
                           onClick={()=>{
                              dispatch({
                                  type: "ADD_TO_CART",
                                  payload: poke,
                              });                                
                              }} disabled={!poke.inStock}>
                              {!poke.inStock ? "Sin Stock" : "Agregar al Carrito"}
                          </Button>)
                      }                  
                  </Card.Body>
              </Card>

          </div>
      )
}

export default Item;