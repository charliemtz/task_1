import React, { useEffect, useState } from "react";
import PokeGrid from "../components/PokeGrid";
import PokeNavBar from "../components/PokeNavBar";
import RightPane from "../components/RightPane";
import { gridSize } from "../utils/Constants";
import { updatePokemons } from "../utils/PokeUtils";

import "../styles/PokeHome.css";

const PokeHome = (props) => {
  const [rows] = useState(gridSize.rows);
  const [cols] = useState(gridSize.cols);

  const {
    pokemons,
    setPokemons,
    newId,
    setNewId,
    clickedId,
    setClickedId,
    discoveredPokemons,
    setDiscoveredPokemons,
    showPokemon,
    setShowPokemon,
  } = props;

  useEffect(() => {
    updatePokemons(newId, pokemons, setPokemons, setDiscoveredPokemons);
  }, [newId, pokemons, setPokemons, setDiscoveredPokemons]);

  return (
    <div>
      <PokeNavBar discoveredPokemons={discoveredPokemons} />
      <div className="empty-header"></div>
      <div className="container">
        <div className="row">
          <div className="col-9 grid-container">
            <PokeGrid
              pokemons={pokemons}
              rows={rows}
              cols={cols}
              setClickedId={setClickedId}
              setShowPokemon={setShowPokemon}
            />
          </div>
          <div className="col-3">
            <RightPane
              clickedPokemon={pokemons[clickedId]}
              showPokemon={showPokemon}
              setShowPokemon={setShowPokemon}
              setNewId={setNewId}
              possibleNumbers={props.possibleNumbers}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeHome;
