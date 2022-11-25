import React, { useState } from "react";

const Usestateex = () => {
  const [btntxt, setBtn] = useState("clik mi");
  const handleClick = () => {
    btntxt === "clik mi" ? setBtn("Hello") : setBtn("clik mi");
    /*   if (btntxt === "clik mi") {
      setBtn("Hello");
    } else {
      setBtn("clik mi"); 
    }*/
  };

  return (
    <div>
      <button onClick={handleClick}>{btntxt}</button>
    </div>
  );
};

export default Usestateex;
