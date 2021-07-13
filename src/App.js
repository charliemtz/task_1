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
          />
        </Route>
        <Route path="/pokedescription">
          <PokeDescription pokemon={pokemons[clickedId]} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
