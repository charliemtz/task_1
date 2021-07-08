import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PokeHome from "./views/PokeHome";
import PokeDescription from "./views/PokeDescription";
import { N } from "./utils/Constants";
import { updatePokemons, preloadPokemons } from "./utils/PokeUtils";

import "./styles/App.css";

export default function App() {
  let [initialArray, possibleNumbers] = preloadPokemons(N);
  const [pokemons, setPokemons] = useState(initialArray);
  const [newId, setNewId] = useState();
  const [clickedId, setClickedId] = useState(1);

  useEffect(() => {
    updatePokemons(newId, setPokemons);
  }, [newId]);

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
          />
        </Route>
        <Route path="/pokedescription">
          <PokeDescription pokemon={pokemons[clickedId]} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
