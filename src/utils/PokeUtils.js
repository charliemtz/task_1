import { isNotEmpty } from "./ObjectUtils";
import { PokeApiCall } from "../services/PokeApiCall";
import { images, N } from "./Constants";

export async function updatePokemons(url, setPokemons) {
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

export function preloadPokemons() {
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
  return [initialArray, possibleNumbers];
}

export function discoveredPokemons(possibleNumbers) {
  return N - possibleNumbers.length;
}
