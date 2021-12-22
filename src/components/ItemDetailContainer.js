import React,{useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
    const [item,setItem] = useState ({});
    
    
    useEffect ( ()=>{
        db()
    }, [])

    const db = async () => {
        const call = await fetch (
            "https://api.mercadolibre.com/sites/MLA/search?q=pokemon"
        );
        if(call.ok) {
            const response = await call.json();
            setItem(response.results.find(item => item.price > 5000));
        } else {
            call.catch ((err) => {
                throw new Error ("Algo salio mal", err);
            });
        }
    };


    return (  
        <>     
                <div>
            {item?.length ?? (
                <div>
                    <p>{item.title}</p>
                    <img src={item.thumbnail} />
                    <p>{item.price}</p>
                </div>    
            )}
        </div>
        <div>
            <ItemDetail/>
        </div>
        </>
        
    )
};

export default ItemDetailContainer;