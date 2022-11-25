import React, { useState, useEffect } from "react";

const Use3 = () => {
  let [num, setNum] = useState(window.innerWidth);
  let [num2, setNum2] = useState(window.innerHeight);
  const change = () => {
    setNum(window.innerWidth);
    setNum2(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", change);
    return () => {
      window.removeEventListener("resize", change);
    };
  });
  return (
    <>
      <div>
        <h2>{num}</h2>
        <h2>{num2}</h2>
      </div>
    </>
  );
};

export default Use3;
