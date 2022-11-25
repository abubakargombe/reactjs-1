import React from "react";

const Desc = (props) => {
  return (
    <div>
      <p>Lorem ipsum</p>
      <p>{props.age} </p>
      <p> {props.tsayi}</p>
      <h3>{props.children}</h3>
    </div>
  );
};

export default Desc;
