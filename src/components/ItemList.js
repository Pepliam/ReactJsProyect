import React, {Component} from 'react';
import Item from "./Item";
import '../styles/ItemList.css';


class ItemList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arr: [{titulo:"Titulo", img: "imagen", descripcion:"descr"}, {descripcion:"otradescr"}]
        }
    }

    promiseMethod = ()=>{
        const aux = new Promise ((resolve,reject)=>{
            setTimeout(()=>{
                resolve ({titulo:"CAMBIO", img: "CAMBIO", descripcion: "CAMBIO"})
            },2000)
        })

        aux.then((res)=>{
            this.setState({arr:[...this.state.arr, res]})
            console.log(res)
        })
    }

    handleClick= (params) => {
        this.setState({click:2})
        this.promiseMethod()
        
    }

    render (){
        
        return(
            <>
                <Item.ButtonSubmit click={this.handleClick}></Item.ButtonSubmit>
                {this.state.arr.map((el)=>{
                    return(
                    <Item.Item titulo={el.titulo} imagen={el.img} descr={el.descripcion}/>
                )})}            
                
                                
            </>
        )
    }
}

export default ItemList;