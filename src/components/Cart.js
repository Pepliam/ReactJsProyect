
import { CartState } from "./context/CartContext"
import React, {useState, useEffect} from "react";
import { ListGroup, Button, Row, Col, Form, Image} from "react-bootstrap";
import Styles from "../styles/Styles.css"
import { AiFillDelete } from "react-icons/ai"

const Cart = () => {

    const {
        state: { cart },
        dispatch
      } = CartState();
    
    const [total, setTotal] = useState();

    useEffect(()=>{
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) *curr.qty, 0));
    }, [cart])

    return (
        <>
        <div className="home">
            <div className="productContainerCart">
            <Row>
                <ListGroup>
                    
                {cart.map((poke)=> (
                    <ListGroup.Item key={poke.id}>
                        <Row>
                            <Col md={2}>
                                <Image src={poke.image} alt={poke.name} fluid rounded />
                            </Col>
                            <Col md={2}>
                                <span>{poke.name}</span>
                            </Col>
                            <Col md={2}>
                                <span>${poke.price}</span>
                            </Col>
                            <Col md={2}>
                                <Form.Control
                                as="select"
                                 value={poke.qty}
                                onChange={(e)=>
                                    dispatch({
                                    type: "CHANGE_CART_QTY",
                                    payload: {
                                        id: poke.id,
                                        qty: e.target.value,
                                    },
                                    })
                                }
                                >
                                    {[...Array(poke.inStock).keys()].map((x)=>(
                                        <option key={x + 1}>{x + 1}</option>
                                    ))}
                                </Form.Control>
                            </Col>
                            <Col md={2}>
                                <Button 
                                    type="button"
                                    variant="light"
                                    onClick={()=>
                                        dispatch({
                                        type: "REMOVE_FROM_CART",
                                        payload: poke,
                                        })
                                    }
                                >
                                    <AiFillDelete
                                        fontSize="20"                                            
                                    />
                                </Button>
                            </Col>
                            <Col md={2}>
                                
                            </Col>
                        </Row>
                    </ListGroup.Item>
                ))}
                </ListGroup>
                                    <div className="filters summary">
            <span className="title"> 
                Subtotal : {cart.length} Item
            </span>
            <span className="spanTotalCarrito">
                Total: ${total}
            </span>
            <Button type="button" disabled={cart.length === 0}>
                Finalizar Compra
            </Button>
        </div>
            </Row>
            </div>
        </div>
        
        </>
    )    
};

export default Cart;