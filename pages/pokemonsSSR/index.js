import Link from "next/link";

const PokemonsSSR = ({pokemons}) => {
  return (
    <>
      <h1> My Pokemons SSR </h1>
      <ul>
        {pokemons.map( pokemon => (
          <Link key={pokemon.name} href={`/pokemonsSSR/${pokemon.id}`} passHref>
            <li> {pokemon.name} </li>
          </Link>
          )
        )}        
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