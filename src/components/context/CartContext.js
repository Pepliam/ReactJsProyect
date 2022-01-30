import { createContext, useReducer, useContext } from "react";
import { cartReducer, productReducer } from "./Reducers";




const Cart = createContext();

const CartContext = ({children}) => {

    const pokes = [{
        id: 1,
        name: "Moltres",
        price: 50000,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/146.png",
        inStock: 0,
        
    }, {
        id: 2,
        name: "Ivysaur",
        price: 1000,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png",
        inStock: 3,
    }, {
        id: 3,
        name: "Gyarados",
        price: 4000,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/130.png",
        inStock: 2,
    }, {
        id: 4,
        name: "Ditto",
        price: 5000,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png",
        inStock: 12,
    } , {
        id: 5,
        name: "Porygon",
        price: 2700,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/137.png",
        inStock: 1,
    } , {
        id: 6,
        name: "Kabutops",
        price: 26100,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/141.png",
        inStock: 1,
    } , {
        id: 7,
        name: "Omastar",
        price: 24200,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/139.png",
        inStock: 0,
    } , {
        id: 8,
        name: "Rhydon",
        price: 22300,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/112.png",
        inStock: 1,
    } , {
        id: 9,
        name: "Voltorb",
        price: 6700,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/100.png",
        inStock: 4,
    } , {
        id: 10,
        name: "Dratini",
        price: 18500,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/147.png",
        inStock: 1,
    } , {
        id: 11,
        name: "Articuno",
        price: 51000,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/144.png",
        inStock: 0,
    } , {
        id: 12,
        name: "Zapdos",
        price: 52000,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/145.png",
        inStock: 1,
    }
];

    const [state, dispatch] =useReducer(cartReducer, {
        pokes: pokes,
        cart: []
    })

    const [productState, productDispatch] =useReducer(productReducer, {
        byStock: false,
        searchQuery:"",
    });



    return <Cart.Provider value={{ state, dispatch, productState, productDispatch}}>{children}</Cart.Provider>
}
    
   

export default CartContext;

export const CartState = () => {
    return useContext(Cart);
}