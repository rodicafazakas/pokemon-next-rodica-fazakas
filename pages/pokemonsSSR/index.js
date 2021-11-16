
const PokemonsSSR = ({pokemons}) => {
  return (
    <>
      <ul>
        {pokemons.map( pokemon => (<li key={pokemon.name}> {pokemon.name} </li>))}        
      </ul>
    </>
  )
};

export const getServerSideProps = async () => {
  const response = await fetch("https://pokeapi-menchu.herokuapp.com/pokemon");
  const pokemonsAPI = await response.json();
  return {
		props: {
			pokemons: pokemonsAPI
		}
	}
};

export default PokemonsSSR;