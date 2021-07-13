import ContentCards from "../components/ContentCards";
import HeaderBar from "../components/HeaderBar";
import PokeImage from "../components/PokeImage";
import PokeNavBar from "../components/PokeNavBar";
import TypeTags from "../components/TypeTags";
import "../styles/PokeDescription.css";

import { loadPokemon } from "../utils/PokeUtils";

const PokeDescription = (props) => {
  let pokemon = loadPokemon(props.pokemon);

  return (
    <div className="container-fluid">
      <PokeNavBar discoveredPokemons={props.discoveredPokemons} />
      <div className="contents row">
        <div className="col-8">
          <HeaderBar id={pokemon.id} name={pokemon.name} />
          <div className="row">
            <ContentCards height={pokemon.height} weight={pokemon.weight} />
            <PokeImage image={pokemon.image} name={pokemon.name} />
            <TypeTags types={pokemon.types} />
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default PokeDescription;
