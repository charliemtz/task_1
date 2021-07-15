import ContentCards from "../components/ContentCards";
import HeaderBar from "../components/HeaderBar";
import PokeExtraInfo from "../components/PokeExtraInfo";
import PokeImage from "../components/PokeImage";
import PokeList from "../components/PokeList";
import PokeNavBar from "../components/PokeNavBar";
import TypeTags from "../components/TypeTags";
import "../styles/PokeDescription.css";

import { loadPokemon, loadExtraInfo } from "../utils/PokeUtils";

const PokeDescription = (props) => {
  const {
    discoveredPokemons,
    pokemons,
    setClickedId,
    setShowPokemon,
    tabExtraInfo,
    setTabExtraInfo,
  } = props;
  const pokemon = loadPokemon(props.selectedPokemon);
  const extraInfo = loadExtraInfo(props.selectedPokemon);

  return (
    <div className="container-fluid">
      <PokeNavBar discoveredPokemons={discoveredPokemons} />
      <div className="contents row">
        <div className="col-8">
          <HeaderBar id={pokemon.id} name={pokemon.name} />
          <div className="row info-container">
            <ContentCards height={pokemon.height} weight={pokemon.weight} />
            <PokeImage image={pokemon.image} name={pokemon.name} />
            <TypeTags types={pokemon.types} />
          </div>
          <div className="row">
            <PokeExtraInfo
              extraInfo={extraInfo}
              tabExtraInfo={tabExtraInfo}
              setTabExtraInfo={setTabExtraInfo}
            />
          </div>
        </div>
        <div className="col-4">
          <PokeList
            pokemons={pokemons}
            setClickedId={setClickedId}
            setShowPokemon={setShowPokemon}
          />
        </div>
      </div>
    </div>
  );
};

export default PokeDescription;
