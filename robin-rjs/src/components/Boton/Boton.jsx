import React from 'react';
import '../Boton/Boton.css';
const boton = (props) => {
    return (
        <button onClick={() => props.siguiente()}>
            Siguente 
        </button>

        
    )
}

export default boton;