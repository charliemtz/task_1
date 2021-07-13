import { normalizeId } from "../utils/StringUtils";
import "../styles/RightPane.css";

const PokeCard = (props) => {
  const { setRightPane, pokemon } = props;
  return (
    <div className="row bottom-row">
      <img className="pokeball" src={pokemon.image} alt={pokemon.name} />
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
