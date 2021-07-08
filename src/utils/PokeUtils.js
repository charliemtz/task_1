import { isNotEmpty } from "./ObjectUtils";
import { PokeApiCall } from "../services/PokeApiCall";
import { images, N, urls } from "./Constants";

export async function updatePokemons(newId, setPokemons) {
  if (typeof newId === "number") {
    const url = `${urls.pokeApi}/pokemon/${newId}`;
    const data = await PokeApiCall(url);
    if (isNotEmpty(data)) {
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
    }
  }
}

export function preloadPokemons(n) {
  let initialArray = [];
  let possibleNumbers = [];
  for (let i = 1; i <= n; i++) {
    possibleNumbers.push(i);
    initialArray.push({
      id: i,
      loaded: false,
      sprite: images.questionMark,
    });
  }
  return [initialArray, possibleNumbers];
}

export function discoveredPokemons(possibleNumbers) {
  return N - possibleNumbers.length;
}
