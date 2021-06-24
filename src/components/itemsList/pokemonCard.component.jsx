import { useState } from "react";
import { getPokemonById } from "../../services/pokemon.services";
import { PokemonCardContent } from "./pokemonCard.content.jsx";
import defaultImg from "../../assets/images/quien-es-este-pokemon.jpg";
import { defaultAltImg } from "./pokemonCard.config";
import "./styles.css";
import { numberRandom } from "../../utils/numberRandom.util";

export const PokemonCard = (props) => {

  const { pokemon: _pokemon, index, setPokemonList, pokemonList } = props;
  const [pokemon, setPokemon] = useState(_pokemon);
  
  const handleClickImg = async () => {
    const randomId = numberRandom();
    const { data } = await getPokemonById(randomId);
    const { sprites, name, id } = data;
    const pokemon = {
      name,
      id,
      img: sprites.other["official-artwork"].front_default,
    };
    pokemonList[index] = pokemon;
    setPokemonList(pokemonList);
    setPokemon(pokemon);
  };

  if (!pokemon)
    return (
      <div className="container-pokemon-card">
        <img
          className="img-content"
          src={defaultImg}
          alt={defaultAltImg}
          onClick={handleClickImg}
        />
      </div>
    );
  return (
    <PokemonCardContent img={pokemon.img} id={pokemon.id} name={pokemon.name} />
  );
};
