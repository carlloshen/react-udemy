import React from "react";
import "./Card.css";

const Card = (props) => {
  const style = {
    backgroundColor: props.color || "#F00",
    borderColor: props.color || "#F00"
  }
  const children = props.children;
  return (
    <>
      <div className="Card" style={style}>
        <div className="Title">{props.titulo}</div>
        <div className="Content">{children}</div>
      </div>
    </>
  );
};

export default Card;
