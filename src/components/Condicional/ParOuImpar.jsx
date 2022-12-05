import React from "react";

const ParImpar = (props) => {
    const isPar = props.numero % 2 === 0

  return (
    <div>
        {isPar ? 
        <span>Par</span> : 
        <span>Impar</span>
        }
    </div>
  );
};

export default ParImpar;
