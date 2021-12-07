import React, {Component} from 'react';
import Common from "./Common";
import "../styles/ItemListContainer.css"

class ItemListContainer extends Component {    
    render (){
        return(
            <>
                <Common.TitleLabel text="HOLA" estilo="color-texto-azul"></Common.TitleLabel>
                <Common.ButtonSubmit></Common.ButtonSubmit>
            </>
        )
    }
}

export default ItemListContainer