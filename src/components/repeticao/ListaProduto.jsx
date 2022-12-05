import React from "react";
import lista from "../../data/produtos";

const Produtos = () => {
    
  const listaProduto = lista.map((prod) => {
    return <tr key={prod.id}>
        <td>{prod.id}</td>
        <td>{prod.produto}</td>
        <td>{prod.preco}</td>
    </tr>;
  });
  return (
    <table border={1}>
      <thead >
        <tr>
          <th colspan={3}>Lista De produtos</th>
        </tr>
      </thead>
      <tbody>
        {listaProduto}
        </tbody>
    </table>
  );
};

export default Produtos;
