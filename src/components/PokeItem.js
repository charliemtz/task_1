import { normalizeId } from "../utils/StringUtils";

const PokeItem = (props) => {
  const { name, id, loaded, image, setClickedId, setShowPokemon } = props;

  const onClick = () => {
    if (loaded) {
      setClickedId(id - 1);
      setShowPokemon(true);
    }
  };

  return (
    <div className="row pokeitem justify-content-center">
      <div className="col-9 colourable" onClick={onClick}>
        <div className="row justify-content-center">
          <div className="col-4">
            <img className="pokeitem-thumbnail" src={image} alt={name} />
          </div>
          <div className="col-4 align-self-center">
            <div className="row pokeitem-text-container">
              <span>{`N.º ${normalizeId(id)}`}</span>
              <span>{name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeItem;
