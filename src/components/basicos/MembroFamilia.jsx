import React from "react";

const Membros = (props) =>{
    return(
        <div>{props.nome} <em>{props.sobrenome}</em></div>
    )
}

export default Membros;