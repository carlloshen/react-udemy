import React from "react";
import alunos from "../../data/alunos";

const Lista = (props) => {
  const style = {
    listStyle: "none",
  };
  const ListaDeAlunos = alunos.map((aluno, i) => {
    return (
      <li key={aluno.id}>
        {aluno.id} - {aluno.nome} = {aluno.nota}
      </li>
    );
  });
  return (
    <div>
      <ul style={style}>{ListaDeAlunos}</ul>
    </div>
  );
};

export default Lista;
