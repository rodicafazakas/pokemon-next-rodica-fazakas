const Pokemon = ({pokemon}) => {
  return (
    <li className="pokemon-card"> 
      <Image 
        className="pokemon-card__img" 
        src={pokemon.img} 
        alt ={pokemon.name} 
      />
      <h3 className="pokemon-card__name"> {pokemon.name}</h3>
      <p className="pokemon-card__type">Type: {pokemon.type} </p>
    </li>
  )
}

export default Pokemon;