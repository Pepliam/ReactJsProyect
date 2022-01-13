import {useParams} from 'react-router-dom'
import CartContext from "../components/context/CartContext"
import { doc, getDoc, getFirestore, collection, getDocs, query, where, limit} from "firebase/firestore";
import React, {useState, useContext, useEffect} from 'react';


export default function Item (){
 
  const [stateData, setStateData] = useState([])
  
  
    useEffect(()=>{
      const db = getFirestore();
      const data = doc(db, "ItemCollection", "fYiVkmZ7QXGZBCRdKm2K");
  
      getDoc(data).then((snapshot)=>{
        console.log(snapshot.data())
        setStateData([snapshot.data()]);
        
        });
      },[]);
      
    
/*
      useEffect(()=>{
        const db = getFirestore();
        const q = query(
          collection(db, "ItemCollection"),
          where("precio", ">", 1500),
          limit(1)
          );
    
        getDocs(q).then((snapshot)=>{
          console.log(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})))
          setStateData(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})));
          
          });
        },[]);*/
      return(
      <>
      
    {stateData.map((value)=><p>{value.Precio}</p>)}
    
                    
    </>
    );
}