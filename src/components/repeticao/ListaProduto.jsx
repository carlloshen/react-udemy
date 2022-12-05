import React from "react";
import lista from "../../data/produtos";
import "./ListaProduto.css"
const Produtos = () => {
  
  const listaProduto = lista.map((prod) => {
    return <tr key={prod.id}>
        <td>{prod.id}</td>
        <td>{prod.produto}</td>
        <td>{prod.preco}</td>
    </tr>;
  });
  return (
    <table className="tabela" border={1}>
      <thead >
        <tr>
          <th colSpan={3}>Lista De produtos</th>
        </tr>
        <tr>
          <th>Id</th>
          <th>Produto</th>
          <th>Preco</th>
        </tr>
      </thead>
      <tbody>
        {listaProduto}
        </tbody>
    </table>
  );
};

export default Produtos;
