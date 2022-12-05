import React from "react";
import If from "./If";

const User = (props) => {
  const usuario = props.usuario || {};
  return (
    <div>
      <If test={usuario && usuario.nome}>
        Seja bem vindo <strong>{usuario.nome}</strong> !
      </If>
      <If test={!usuario || !usuario.nome}>
        Seja bem vindo <strong>usuario</strong> !
      </If>
    </div>
  );
};

export default User;
