import { isNotEmpty } from "./ObjectUtils";
import { PokeApiCall } from "../services/PokeApiCall";
import { images, urls } from "./Constants";

export async function updatePokemons(
  newId,
  pokemons,
  setPokemons,
  setDiscoveredPokemons
) {
  if (typeof newId === "number") {
    const baseUrl = `${urls.pokeApi}/pokemon/${newId}`;
    const baseData = await PokeApiCall(baseUrl);
    const encountersUrl = `${urls.pokeApi}/pokemon/${newId}/encounters`;
    const encountersData = await PokeApiCall(encountersUrl);
    const speciesUrl = `${urls.pokeApi}/pokemon-species/${newId}`;
    const speciesData = await PokeApiCall(speciesUrl);
    if (isNotEmpty(baseData)) {
      setPokemons((prev) => {
        const i = prev.findIndex((pokemon) => pokemon.id === baseData.id);
        prev[i] = {
          name: baseData.name,
          id: baseData.id,
          loaded: true,
          sprite: baseData.sprites.front_default,
          image: baseData.sprites.other["official-artwork"].front_default,
          height: baseData.height,
          types: baseData.types,
          weight: baseData.weight,
          stats: baseData.stats,
          moves: baseData.moves,
          heldItems: baseData.heldItems,
        };
        if (isNotEmpty(encountersData)) {
          prev[i] = {
            ...prev[i],
            encountersData: encountersData,
          };
        }
        if (isNotEmpty(speciesData)) {
          prev[i] = {
            ...prev[i],
            speciesData: speciesData,
          };
        }
        return prev;
      });
      setDiscoveredPokemons(() => {
        return pokemons.filter((item) => item.loaded).length;
      });
    }
  }
}

export function loadPokemon(pokemon) {
  if (pokemon.loaded === true) {
    return pokemon;
  } else {
    return {
      name: "Missingno",
      id: 0,
      loaded: true,
      image: images.questionMark,
      height: 0,
      types: [],
      weight: 0,
      stats: [],
    };
  }
}

export function preload(n) {
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
