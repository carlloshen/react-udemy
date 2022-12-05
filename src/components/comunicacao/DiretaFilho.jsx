import React from "react";

const Filho = (props) =>{
    return(
        <div>
            <div>{props.nome}</div>
            <div>{props.idade}</div>
            <div>{props.nerd ? "verdadeiro" : "false"}</div>
        </div>
    )
}

export default Filho;