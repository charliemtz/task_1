import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PokeGrid from "./components/PokeGrid";
import PokeBall from "./components/PokeBall";
import PokeDescription from "./components/PokeDescription";
import { N, gridSize, urls, images } from "./utils/Constants";

import "./styles/App.css";

function App() {
  const axios = require("axios").default;

  let initialArray = [];
  let possibleNumbers = [];
  for (let i = 1; i <= N; i++) {
    possibleNumbers.push(i);
    initialArray.push({
      id: i,
      loaded: false,
      sprite: images.questionMark,
    });
  }
  const [pokemons, setPokemons] = useState(initialArray);
  const rows = useState(gridSize.rows);
  const cols = useState(gridSize.cols);
  const [url, setUrl] = useState("");
  const [clickedId, setClickedId] = useState(1);

  useEffect(() => {
    const fetchPokemons = async () => {
      if (url.length > 0) {
        try {
          const response = await axios.get(url);
          const data = response.data;
          setPokemons((prev) => {
            const i = prev.findIndex((pokemon) => pokemon.id === data.id);
            prev[i] = {
              name: data.name,
              id: data.id,
              loaded: true,
              sprite: data.sprites.front_default,
              image: data.sprites.other["official-artwork"].front_default,
              height: data.height,
              types: data.types,
              weight: data.weight,
              abilities: data.abilities,
            };
            return prev;
          });
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchPokemons();
  }, [url, axios]);

  function randomNumberGenerator(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  function handlePokeballClick() {
    let randomId;
    if (possibleNumbers.length > 0) {
      do {
        randomId = randomNumberGenerator(N);
      } while (!possibleNumbers.includes(randomId));
      possibleNumbers = possibleNumbers.filter((number) => randomId !== number);
      setUrl(`${urls.pokeApi}/pokemon/${randomId}`);
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
