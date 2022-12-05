import React from "react";

const Aleatorio = (props) => {
  const [min, max] = [props.min, props.max];
  const aleatorio = parseInt(Math.random() * (max - min)) + min;

  return (
    <>
      <h2>Valor Aleatorio</h2>
      <p>
        <strong>Valor Minimo: </strong> {min}
      </p>
      <p>
        <strong>Valor Maximo: </strong> {max}
      </p>
      <p>
        <strong>Valor Escolhido</strong> {aleatorio}
      </p>
    </>
  );
};

export default Aleatorio;
