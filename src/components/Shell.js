import React, {Component} from 'react';
import Common from "./Common";
import '../styles/ShellStyles.css'

class Shell extends Component {

    
    render (){
        
        return(
            <>
                
                <Common.TitleLabel text="Formulario" estilo="color-texto-nav-verde"></Common.TitleLabel>
                <Common.ButtonSubmit click={this.handleClick}></Common.ButtonSubmit>
                
            </>
        )
    }
}

export default Shell