import React from "react";

const IndFilho = (props) => {
  const cb = props.quandoClicar;
  return (
    <div>
      <div>Filho</div>
      <button onClick={(e) => cb("Joao", 53, true)}>
        Fornecer Informações
      </button>
    </div>
  );
};

export default IndFilho;
