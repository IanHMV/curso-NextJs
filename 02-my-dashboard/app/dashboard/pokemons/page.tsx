
async function getPokemon() {

  const data = await fetch('https://pokeapi.co/api/v2/pokemon').then(res => res.json());

  return data;
}

const PokemonsPage = () => {

  const pokemons = getPokemon();

  console.log(pokemons);
  return (
    <>

    </>
  )
}

export default PokemonsPage