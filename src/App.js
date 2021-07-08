import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PokeGrid from "./components/PokeGrid";
import PokeBall from "./components/PokeBall";
import PokeDescription from "./components/PokeDescription";
import { N, gridSize } from "./utils/Constants";
import { randomNumberGenerator } from "./utils/NumberUtils";
import { updatePokemons, preloadPokemons } from "./utils/PokeUtils";

import "./styles/App.css";

function App() {
  let [initialArray, possibleNumbers] = preloadPokemons(N);
  const [pokemons, setPokemons] = useState(initialArray);
  const rows = useState(gridSize.rows);
  const cols = useState(gridSize.cols);
  const [newId, setNewId] = useState();
  const [clickedId, setClickedId] = useState(1);

  useEffect(() => {
    updatePokemons(newId, setPokemons);
  }, [newId]);

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

  function Home() {
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

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pokedescription">
          <PokeDescription pokemon={pokemons[clickedId]} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
