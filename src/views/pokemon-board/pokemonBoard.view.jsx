
import { useState } from "react";
import { PokemonCard } from "../../components/itemsList/pokemonCard.component.jsx";
import "./styles.css";
import { INITIAL_STATE_OF_BOARD } from "./pokemonBoard.config.js";

export const PokemonBoard = () => {
  const [pokemonList, setPokemonList] = useState(INITIAL_STATE_OF_BOARD);

  return (
    <div className="container">
      <div className="title-board">
        <h1>Descubre los Pokémon</h1>
      </div>
      <div className="container-board">
        {pokemonList.map((pokemon, index) => (
          <div className="item-board" key={index}>
            <PokemonCard
              pokemon={pokemon}
              index={index}
              pokemonList={pokemonList}
              setPokemonList={setPokemonList}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
