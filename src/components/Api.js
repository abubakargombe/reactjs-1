import React, { useState, useEffect } from "react";
const Api = () => {
  const [people, setPeople] = useState([]);

  /*   const getPeople = async () => {
    //const people = await fetch("https://api.publicapis.org/entries");
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    return data
    //const {id,title } = data;
    //people = JSON.parse(people);
    console.log(people);
    setPeople(people);
  }; */
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then(
      async (response) => {
        const data = await response.json();
        setPeople(data);
      }
    );
  }, []);

  return (
    <>
      {people.map((man) => {
        return <p key={man.id}>{man.title}</p>;
      })}
    </>
  );
};
export default Api;
