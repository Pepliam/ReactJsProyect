import React, {useState, useEffect} from "react";
import ItemCount from "./ItemCount";
import { doc, getDoc, getFirestore, collection, getDocs, query, where} from "firebase/firestore";

const ItemDetail = () => {    
          

    
/*
       const [stateData, setStateData] = useState([])
  
    useEffect(()=>{
      const db = getFirestore();
      const q = query(collection(db, "items"), where("price", ">", 4000));
  
      getDocs(q).then((snapshot)=>{
        console.log(q)
        setStateData(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})));
        
        });
      },[]);


    return(
        <>
        {stateData.map((value, id)=><p key={id}>{value.title}</p>)}
        
        </>
    )*/};
export default ItemDetail();