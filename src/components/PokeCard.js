import { useHistory } from "react-router";
import { normalizeId } from "../utils/StringUtils";
import "../styles/RightPane.css";

const PokeCard = (props) => {
  const { pokemon, setShowPokemon } = props;
  const history = useHistory();

  const handleCloseButton = () => {
    setShowPokemon(false);
  };

  const handleViewMore = () => {
    history.push("/pokedescription");
  };

  return (
    <div className="row pane align-content-center">
      <div className="justify-content-end">
        <div className="close-button" onClick={handleCloseButton}>
          <span>&#215;</span>
        </div>
      </div>
      <div className="view-more" onClick={handleViewMore}>
        Ver más
      </div>
      <img
        className="right-images poke-image"
        src={pokemon.image}
        alt={pokemon.name}
      />
      <div className="pokecard text-black mb-2 p-0">
        <div className="pokecard-header">{`N.º ${normalizeId(
          pokemon.id
        )}`}</div>
        <div className="pokecard-body">
          <h3 className="pokecard-title">{pokemon.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
