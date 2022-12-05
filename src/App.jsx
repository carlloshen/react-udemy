import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import Segundo from "./components/basicos/ComParametro";
import Aleatorio from "./components/basicos/ComponenteAleatorio";
import Card from "./components/Layout/Card";
import Familia from "./components/basicos/Familia";
import MembroFamilia from "./components/basicos/MembroFamilia";
import Lista from "./components/repeticao/ListaAlunos";
import Produtos from "./components/repeticao/ListaProduto";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Cards">
        <Card titulo="#07 Desafio" color={"#101010"}>
          <Produtos/>
        </Card>
        <Card titulo="#06 Repetição" color={"#101010"}>
          <Lista></Lista>
        </Card>
        <Card titulo="#05 Familia" color={"#01FFFF"}>
          <Familia sobrenome="silva">
            <MembroFamilia nome="Carlos" />
            <MembroFamilia nome="Caio" />
            <MembroFamilia nome="debora" />
          </Familia>
        </Card>
        <Card titulo="#04 Numero Aleatorio" color={"#0F0"}>
          <Aleatorio min={1} max={10} />
        </Card>

        <Card titulo="#03 Situação Cadastral" color={"#9F8800"}>
          <Segundo
            titulo="Situacao Cadastral"
            segundo="Inadimplente"
            terceiro={100}
          />
        </Card>
        <Card titulo="#02 Situação Cadastral" color={"#00FF"}>
          <Segundo
            titulo="Isto é um card"
            segundo="Adicionado com props e children"
            terceiro={100}
          />
        </Card>
        <Card titulo="#01 Firts Component" color={"#001010"}>
          <Primeiro />
        </Card>
      </div>
    </div>
  );
};

/* FORMA MAIS REDUZIDA  O "_" ele indica que so tem uma funcao 
export default _ => 
 
    <div id="App">
      <h1>Fundamentos React</h1>
      <Segundo titulo="ola" segundo="dia" terceiro="Pau ni cu de geral" />
      <Segundo titulo="Ai mi amor" />
      <Primeiro />
    </div>

*/
export default App;
