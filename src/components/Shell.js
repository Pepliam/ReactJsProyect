import React, {Component} from 'react';
import Common from "./Common";
import '../styles/ShellStyles.css';


class Shell extends Component {

    constructor(props) {
        super(props);
        this.state = { /*declaro prop a cambiar luego*/
            name:"Juli"
        }
    }

    handleClick= (params) => {/*cuando hago click hago esto*/
        this.setState({click:"Hola!"})
        console.log(this.state)
    }

    render (){
        
        return(
            <>
                                
                <Common.TitleLabel text={this.state.name} estilo="color-texto-nav-rojo"></Common.TitleLabel>
                <Common.TitleLabel text="Lorem Ip" estilo="color-texto-nav-verde"></Common.TitleLabel>               
                <Common.ButtonSubmit click={this.handleClick}></Common.ButtonSubmit>
                <Common.TitleLabel text={this.state.click}/*solo renderizo esto puntualmente*/ estilo="color-texto-nav-azul"></Common.TitleLabel>
                                
            </>
        )
    }
}

export default Shell