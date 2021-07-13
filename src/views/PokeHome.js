import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PokeGrid from "../components/PokeGrid";
import PokeNavBar from "../components/PokeNavBar";
import RightPane from "../components/RightPane";
import { N, gridSize } from "../utils/Constants";
import { randomNumberGenerator } from "../utils/NumberUtils";
import { updatePokemons } from "../utils/PokeUtils";

import "../styles/PokeHome.css";

const PokeHome = (props) => {
  const rows = useState(gridSize.rows);
  const cols = useState(gridSize.cols);
  const history = useHistory();

  const {
    pokemons,
    setPokemons,
    newId,
    setNewId,
    clickedId,
    setClickedId,
    discoveredPokemons,
    setDiscoveredPokemons,
    rightPane,
    setRightPane,
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

  const handleCellClick = (id) => {
    setClickedId(id - 1);
    setRightPane("pokemon");
  };

  const handleViewMoreClick = () => {
    history.push("/pokedescription");
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
              onClick={handleCellClick}
            />
          </div>
          <div className="col-3">
            <RightPane
              pokeballClick={handlePokeballClick}
              rightPane={rightPane}
              setRightPane={setRightPane}
              clickedPokemon={pokemons[clickedId]}
              handleViewMoreClick={handleViewMoreClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeHome;
