import ContentCards from "../components/ContentCards";
import HeaderBar from "../components/HeaderBar";
import PokeImage from "../components/PokeImage";
import TypeTags from "../components/TypeTags";
import "../styles/PokeDescription.css";

import { loadPokemon } from "../utils/PokeUtils";

export default function PokeDescription(props) {
  let pokemon = loadPokemon(props.pokemon);

  return (
    <div className="container-fluid">
      <HeaderBar id={pokemon.id} name={pokemon.name} />
      <div className="contents row">
        <ContentCards height={pokemon.height} weight={pokemon.weight} />
        <TypeTags types={pokemon.types} />
        <PokeImage image={pokemon.image} name={pokemon.name} />
      </div>
    </div>
  );
}

/*
          <div className="card card-right text-black bg-light p-0 mt-5">
            <div className="card-header">Habilidades</div>
            <div className="card-body">
              {pokemon.abilities.map((ability) => {
                return (
                  <p
                    className="card-title abilities"
                    key={`ability-${ability.slot}`}
                  >
                    {capitalize(ability.ability.name)}{" "}
                    {ability.is_hidden ? "(hidden)" : ""}
                  </p>
                );
              })}
            </div>
          </div>
*/
