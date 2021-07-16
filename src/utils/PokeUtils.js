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
          heldItems: baseData.held_items,
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
  if (pokemon.loaded) {
    return pokemon;
  } else {
    return {
      name: "Missingno",
      id: 0,
      loaded: true,
      image: images.questionMark,
      height: 0,
      weight: 0,
    };
  }
}

function compareMethods(oldMethod, newMethod) {
  const sameNames = oldMethod.name === newMethod.name;
  const sameConditions =
    oldMethod.conditions.length === newMethod.conditions.length &&
    oldMethod.conditions.every(
      (val, index) => val === newMethod.conditions[index]
    );
  return sameNames && sameConditions;
}

export function loadExtraInfo(pokemon) {
  let extraData = {
    stats: {},
    moves: [],
    encounters: {},
    heldItems: [],
    species: {},
  };

  if (pokemon.loaded) {
    // 1. Base Stats
    pokemon.stats.forEach((stat) => {
      const name = stat.stat.name;
      extraData.stats[name] = stat.base_stat;
    });

    // 2. Moves (skills)
    // los 4 primeros
    for (let i = 0; i < 4; i++) {
      extraData.moves[i] = pokemon.moves[i].move.name;
    }

    // 3. Location Area
    // - Nombre del lugar
    // - Método (caminando, surfeando)
    // - Alguna condición necesaria si tiene (que sea de día, de noche, etc)
    pokemon.encountersData.forEach((encounter) => {
      const location = encounter.location_area.name;

      encounter.version_details.forEach((detail) => {
        const version = detail.version.name;
        if (extraData.encounters[version] === undefined) {
          extraData.encounters[version] = [];
        }
        const methods = [];
        detail.encounter_details.forEach((encounter) => {
          const newMethod = {
            name: "",
            conditions: [],
          };
          newMethod.name = encounter.method.name;
          encounter.condition_values.forEach((condition_value) => {
            newMethod.conditions.push(condition_value.name);
          });
          // check if exact same method doesn't already exist, and only then push it to methods:
          let foundExactSameMethod = false;
          methods.forEach((oldMethod) => {
            foundExactSameMethod = compareMethods(oldMethod, newMethod);
          });
          if (!foundExactSameMethod) {
            methods.push(newMethod);
          }
        });
        const newEncounter = {
          location: location,
          methods: methods,
        };
        extraData.encounters[version].push(newEncounter);
      });
    });

    // 4. Held Items
    pokemon.heldItems.forEach((heldItem) => {
      extraData.heldItems.push(heldItem.item.name);
    });

    // 5. Species
    // - Habitat
    // - Growth Rate
    // - Hatch counter
    // - Is baby
    // - Is legendary
    // - Is mythical
    // - Shape
    // extraData.species = pokemon.speciesData;
    extraData.species = {
      habitat: pokemon.speciesData.habitat.name,
      growthRate: pokemon.speciesData.growth_rate.name,
      hatchCounter: pokemon.speciesData.hatch_counter,
      isBaby: pokemon.speciesData.is_baby,
      isLegendary: pokemon.speciesData.is_legendary,
      isMythical: pokemon.speciesData.is_mythical,
      shape: pokemon.speciesData.shape.name,
    };
  }

  return extraData;
}

export function preload(n) {
  let initialArray = [];
  let possibleNumbers = [];
  for (let i = 1; i <= n; i++) {
    possibleNumbers.push(i);
    initialArray.push({
      name: "???",
      id: i,
      loaded: false,
      sprite: images.questionMark,
    });
  }
  return [initialArray, possibleNumbers];
}
