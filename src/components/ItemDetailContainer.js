import ItemDetail from "./ItemDetail";
import Container from 'react-bootstrap/esm/Container';
import React, {useState, useEffect} from 'react';
import '../styles/ItemList.css';
import {NavLink} from 'react-router-dom';
import { deleteDoc, writeBatch, updateDoc, addDoc, collection, getDocs, doc, getFirestore, getDoc, where, query} from "firebase/firestore";
import Item from "./Item";
import {Form, Button} from 'react-bootstrap'


const ItemDetailContainer = () => {
    
    
    const name = "test"
    const [state, setState] = useState([{name}])
    const [stateData, setStateData] = useState([])
    const [newData, setNewData] = useState()
    

    const db = getFirestore();

    useEffect(()=>{
        const data = collection(db, "items")
        getDocs(data).then((res)=>{
            console.log(res.docs.map((doc)=>({id: doc.id, ...doc.data()})))
            setStateData(res.docs.map((doc)=>({id: doc.id, ...doc.data()})))
        })
    },[name, newData])

    const handleSubmit = (e)=>{
        e.preventDefault()
        const newItem = {nombre:e.target[0].value,precio:e.target[1].value}
        const data = collection(db, "items")
        addDoc(data,newItem).then((res)=>{
            console.log(res.id)
            setNewData(res.id)
        })
        console.log(newData)
    }
    


return(
<>

<h1>Agregar Item a base de datos Firebase</h1>
<Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingresa el nombre" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Precio</Form.Label>
            <Form.Control type="number" placeholder="Ingresa el precio" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Ingresar
        </Button>
        </Form>
        <br></br>
        
        <br></br>

        <h2>ITEMS AGREGADOS</h2>
        {
             stateData.map((value, id)=> <p key={id}><h4>Item: {value.nombre}</h4> <h5>Precio: {value.precio}</h5> <h6>Numero de Orden: #{value.id}</h6></p>)
         }
        </>
)

};

export default ItemDetailContainer;