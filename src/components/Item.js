const Item = {  ButtonSubmit : (props)=>(<button onClick={props.click}>Saludo!</button>),  
    Item: (props)=>(
        <div>
            <h1>{props.titulo}</h1>
            <p>{props.imagen}</p>
            <p>{props.descr}</p>
        </div>
    )
    }


export default Item;
