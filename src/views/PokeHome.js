import React, { useEffect, useState } from "react";
import PokeBall from "../components/PokeBall";
import PokeGrid from "../components/PokeGrid";
import PokeNavBar from "../components/PokeNavBar";
import { N, gridSize } from "../utils/Constants";
import { randomNumberGenerator } from "../utils/NumberUtils";
import { updatePokemons } from "../utils/PokeUtils";

import "../styles/PokeHome.css";

const PokeHome = (props) => {
  const rows = useState(gridSize.rows);
  const cols = useState(gridSize.cols);

  const {
    pokemons,
    setPokemons,
    newId,
    setNewId,
    clickedId,
    setClickedId,
    discoveredPokemons,
    setDiscoveredPokemons,
  } = props;
  let { possibleNumbers } = props;

  useEffect(() => {
    updatePokemons(newId, pokemons, setPokemons, setDiscoveredPokemons);
  }, [newId, pokemons, setPokemons, setDiscoveredPokemons]);

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
    <div>
      <PokeNavBar discoveredPokemons={discoveredPokemons} />
      <div className="empty-header"></div>
      <div className="container">
        <div className="row">
          <div className="col-9">
            <PokeGrid
              pokemons={pokemons}
              rows={rows}
              cols={cols}
              onClick={handleGridClick}
            />
          </div>
          <div className="col-3">
            <PokeBall onClick={handlePokeballClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeHome;
