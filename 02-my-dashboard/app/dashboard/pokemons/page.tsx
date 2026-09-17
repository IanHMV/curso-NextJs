import { PokemonsResponse, SimplePokemons } from "@/pokemons";
import Image from "next/image";

import { PokemonGrid } from "@/pokemons";
import { notFound } from "next/navigation";

async function getPokemon(limit = 20, offset = 0): Promise<SimplePokemons[]> {

  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${0}`).then(res => res.json());

  const pokemons = data.results.map(pokemon => (
    {
      id: Number(pokemon.url.split('/').at(-2)),
      name: pokemon.name
    }
  ))

  return pokemons;
}

export default async function PokemonsPage() {

  const pokemons = await getPokemon(151);

  return (
    <div className=" flex flex-col">
      <span className="text-5xl my-2"><small>Static</small> Pokemon List </span>

      <PokemonGrid pokemons={pokemons} />

    </div>
  )
}