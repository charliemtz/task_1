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
      <HeaderBar id={pokemon.id} name={pokemon.name} />
      <div className="contents row">
        <ContentCards height={pokemon.height} weight={pokemon.weight} />
        <TypeTags types={pokemon.types} />
        <PokeImage image={pokemon.image} name={pokemon.name} />
      </div>
    </div>
  );
};

export default PokeDescription;
