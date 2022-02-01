
import { CartState } from "./context/CartContext"
import React, {useState, useEffect} from "react";
import { ListGroup, Button, Row, Col, Form, Image} from "react-bootstrap";
import "../styles/Styles.css";
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

        <div className="filtersCart">
            <span className="title"> 
                Llevas : {cart.length} Especies Pokemon
            </span>
            <span className="spanTotalCarrito">
                Total a pagar: ${total}
            </span>
            <Button className="buttonCart" type="button" disabled={cart.length === 0}>
                Finalizar Compra
            </Button>
        </div>

            <div className="productContainerCart">
            <Row>
                
                <ListGroup className="listGroup">
                    
                {cart.map((poke)=> (
                    <ListGroup.Item key={poke.id}>
                        <Row className="rowClass">
                            <Col md={3}>
                                <Image src={poke.image} alt={poke.name} fluid rounded />
                            </Col>
                            <Col md={3}>
                                <span>{poke.name}</span>
                            </Col>
                            <Col md={3}>
                                <span>${poke.price}</span>
                            </Col>
                            <Col md={3}>
                                <Form.Control
                                className="cantidadItem"
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
                            <Col md={3}>
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
                        </Row>
                    </ListGroup.Item>
                ))}
                </ListGroup>
            
            </Row>
            </div>
        </div>
        
        </>
    )    
};

export default Cart;