import Pokemon from "../../components/Pokemon/Pokemon";
import {useEffect, useState} from "react";

const Pokemons = () => {

  const [pokemons, setPokemons] = useState([]);

  useEffect(
  () =>  
    (async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");
      const pokemons = await response.json();
      setPokemons(pokemons);
    })(), 
    []
  );


  return (
    <main>
     <h1> First 10 pokemons from PokeAPI </h1>
     <ul> 
      {pokemons.map( (pokemon) => (
        // <Pokemon key={pokemon.name} pokemons={pokemon} />
        <li> {pokemon.name} </li>  
      ))}
     </ul>
    </main> 
  )
};

export default Pokemons;