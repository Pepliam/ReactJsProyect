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
      
    }

    render (){
        
        return(
            <>
                                
                
                                
            </>
        )
    }
}

export default Shell