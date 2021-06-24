import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { getPokemonById } from "../../services/pokemon.services";
import { PokemonInfoContent } from "./pokemonInfo.content";
import "./styles.css";

export const PokemonInfo = () => {
  const { state = {} } = useLocation();
  const { id = null } = state;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const getPokemon = async () => {
      const { data } = await getPokemonById(id);
      setPokemon(data);
    };
    getPokemon();
    return () => {
      setPokemon(null);
    };
  }, [id]);

  if (!pokemon)
    return (
      <div className="container-pokemon-info">
        <h1 className="title-info">Aqui no hay nada</h1>;
      </div>
    );
  return (
    <PokemonInfoContent
      name={pokemon.name}
      abilities={pokemon.abilities}
      id={pokemon.id}
      sprites={pokemon.sprites}
      height={pokemon.height}
      weight={pokemon.weight}
      type={pokemon.types}
    />
  );
};
