import { useEffect, useState } from "react";

export function Character() {
  const [character, setCharacter] = useState([]);

  const name = "";

  //useEffect y useState Hooks
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacter(data.results));
  }, []);
  //userEffect recibe una funcion claback, es decir el codigo al ejecutar
  //recibe cuando va  a ejecutar.
  return (
    <ul>
      {character.map((item, index) => (
        <li key={index}>
          <h3>{item.name}</h3>
          <p>{item.status}</p>
          <p>{item.species}</p>
          <h3>Last known location:</h3>
          <p>{item.location["name"]}</p>
          <h3>First seen in:</h3>
          <p>{item.origin["name"]}</p>
          <img src={item.image} alt="" />
        </li>
      ))}
    </ul>
  );
}
