import { listOfObjects } from "../datas";
import React from "react";

const Use2 = () => {
  const [mutane, setmutane] = React.useState(listOfObjects);
  const cire = (id) => {
    let sabbi = mutane.filter((mutum) => mutum.id !== id);
    setmutane(sabbi);
  };
  return (
    <>
      {mutane.map((mutum) => {
        const { gari, id } = mutum;

        return (
          <div key={id}>
            <p>{mutum.gari}</p>
            <p>{mutum.suna}</p>
            <h1>{gari}</h1>
            <button onClick={() => cire(id)}>X</button>
          </div>
        );
      })}
      <button
        onClick={() => {
          setmutane([]);
        }}
      >
        clear
      </button>
    </>
  );
};

export default Use2;
