import React, { useEffect, useState } from "react";
import PokeGrid from "../components/PokeGrid";
import PokeBall from "../components/PokeBall";
import { N, gridSize } from "../utils/Constants";
import { randomNumberGenerator } from "../utils/NumberUtils";
import { updatePokemons } from "../utils/PokeUtils";

export default function PokeHome(props) {
  const rows = useState(gridSize.rows);
  const cols = useState(gridSize.cols);

  const { pokemons, setPokemons, newId, setNewId, setClickedId } = props;
  let { possibleNumbers } = props;

  useEffect(() => {
    updatePokemons(newId, setPokemons);
  }, [newId, setPokemons]);

  function handlePokeballClick() {
    let randomId;
    if (possibleNumbers.length > 0) {
      do {
        randomId = randomNumberGenerator(N);
      } while (!possibleNumbers.includes(randomId));
      possibleNumbers = possibleNumbers.filter((number) => randomId !== number);
      setNewId(randomId);
    }
  }

  const handleGridClick = (id) => {
    setClickedId(id - 1);
  };

  return (
    <div className="container">
      <PokeGrid
        pokemons={pokemons}
        rows={rows}
        cols={cols}
        onClick={handleGridClick}
      />
      <PokeBall onClick={handlePokeballClick} />
    </div>
  );
}
