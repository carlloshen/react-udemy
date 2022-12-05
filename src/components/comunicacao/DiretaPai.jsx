import React from "react";
import DiretaFilho from "./DiretaFilho"


const Pai = (props) =>{
    return(
        <div>
            <DiretaFilho nome="Child 1" idade={20} nerd={true} />
        </div>
    )
}

export default Pai;