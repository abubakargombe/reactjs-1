import React, { useState, useEffect } from "react";
import axios from "axios";
const Axos = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        // handle success
        setPeople(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <div>
      {people.map((man) => {
        return <p key={man.id}>{man.name}</p>;
      })}
    </div>
  );
};

export default Axos;
