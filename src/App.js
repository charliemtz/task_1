import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PokeHome from "./views/PokeHome";
import PokeDescription from "./views/PokeDescription";
import { N } from "./utils/Constants";
import { preload } from "./utils/PokeUtils";

const App = () => {
  let [initialArray, possibleNumbers] = preload(N);

  const [clickedId, setClickedId] = useState(1);
  const [discoveredPokemons, setDiscoveredPokemons] = useState(0);
  const [newId, setNewId] = useState();
  const [pokemons, setPokemons] = useState(initialArray);
  const [showPokemon, setShowPokemon] = useState(false);
  const [tabExtraInfo, setTabExtraInfo] = useState(3);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <PokeHome
            pokemons={pokemons}
            setPokemons={setPokemons}
            newId={newId}
            setNewId={setNewId}
            clickedId={clickedId}
            setClickedId={setClickedId}
            possibleNumbers={possibleNumbers}
            discoveredPokemons={discoveredPokemons}
            setDiscoveredPokemons={setDiscoveredPokemons}
            showPokemon={showPokemon}
            setShowPokemon={setShowPokemon}
          />
        </Route>
        <Route path="/pokedescription">
          <PokeDescription
            selectedPokemon={pokemons[clickedId]}
            discoveredPokemons={discoveredPokemons}
            pokemons={pokemons}
            setClickedId={setClickedId}
            setShowPokemon={setShowPokemon}
            tabExtraInfo={tabExtraInfo}
            setTabExtraInfo={setTabExtraInfo}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
