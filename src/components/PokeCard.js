import { normalizeId } from "../utils/StringUtils";
import "../styles/RightPane.css";

const PokeCard = (props) => {
  const { setRightPane, pokemon, onViewMoreClick } = props;

  const handleCloseButton = () => {
    setRightPane("pokeball");
  };

  return (
    <div className="row pane align-content-center">
      <div>
        <div className="close-button" onClick={handleCloseButton}>
          &#215;
        </div>
      </div>
      <div className="view-more" onClick={onViewMoreClick}>
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
