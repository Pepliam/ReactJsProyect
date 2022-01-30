import { Button, Form} from "react-bootstrap";
import Styles from "../styles/Styles.css";
import { CartState } from "../components/context/CartContext"

const Filters = () => {

    const {
        productState: {
            byStock,
            sort,
        }, productDispatch
    } = CartState();




    return (
        <div className="filters">
            <span className="title">Filtros</span>
            <span>
                <Form.Check
                    inline
                    label="Menor a Mayor Precio"
                    name="group1"
                    type="radio"
                    id={`inline-1`}
                    onChange={()=>
                        productDispatch({
                            type: "SORT_BY_PRICE",
                            payload: "lowToHigh",
                        })
                    }
                    checked={ sort === "lowToHigh" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Mayor a Menor Precio"
                    name="group1"
                    type="radio"
                    id={`inline-2`}
                    onChange={()=>
                        productDispatch({
                            type: "SORT_BY_PRICE",
                            payload: "highToLow",
                        })
                    }
                    checked={ sort === "highToLow" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Incluir Sin Stock"
                    name="group1"
                    type="checkbox"
                    id={`inline-3`}
                    onChange={()=>
                        productDispatch({
                            type: "FILTER_BY_STOCK",                            
                        })
                    }
                    checked={byStock}
                />
            </span>
            
            <Button
             variant="dark"
             onClick={()=>
                productDispatch({
                    type: "CLEAR_FILTERS",                            
                })
            }       
             
             
             >Limpiar Filtros
             </Button>


        </div>
    )
};


export default Filters;