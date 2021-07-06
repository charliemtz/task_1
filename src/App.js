import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PokeGrid from './components/PokeGrid';
import PokeBall from './components/PokeBall';
import PokeDescription from './components/PokeDescription';

import './styles/App.css';


function App() {
  const N = 255;
  
  const QUESTION_MARK_URL = "https://upload.wikimedia.org/wikipedia/commons/d/d9/Icon-round-Question_mark.svg";
  const POKEAPI_URL = "https://pokeapi.co/api/v2";
  
  let initialArray = [];
  let possibleNumbers = [];
  for (let i = 1; i <= N; i++) {
    possibleNumbers.push(i);
    initialArray.push({
      id: i,
      loaded: false,
      sprite: QUESTION_MARK_URL
    });
  }
  const [pokemons, setPokemons] = useState(initialArray);
  const rows = useState(6);
  const cols = useState(8);
  const [url, setUrl] = useState('');
  const [clickedId, setClickedId] = useState(1);

  
  useEffect(() => {
    const fetchPokemons = async () => {
      if (url.length > 0) {
        const response = await fetch(url);
        const data = await response.json();
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
            abilities: data.abilities
          }
          return prev;
        });
      }
    };    
    fetchPokemons();
  }, [url]);
  
  function randomNumberGenerator(max) {
    return Math.floor(Math.random() * max) + 1;
  }
  
  function handlePokeballClick() {
    let randomId;
    if (possibleNumbers.length > 0) { 
      do {
        randomId = randomNumberGenerator(N);
      } while (!possibleNumbers.includes(randomId));
      possibleNumbers = possibleNumbers.filter(number => randomId !== number);
      setUrl(`${POKEAPI_URL}/pokemon/${randomId}`);
    }
  }

  const handleGridClick = (id) => {
    setClickedId(id - 1);
  }
  
  function Home() {
    return(
      <div className="container">
        <PokeGrid 
          pokemons={pokemons} 
          rows={rows} 
          cols={cols}
          onClick={handleGridClick}
        />
        <PokeBall
          onClick={handlePokeballClick}
        />
      </div> 
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pokedescription" >
          <PokeDescription pokemon={pokemons[clickedId]}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

