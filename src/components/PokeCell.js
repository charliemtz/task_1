import { capitalize } from "../utils/StringUtils";

const PokeCell = (props) => {
  const { id, name, sprite, loaded, handleClick } = props;

  return (
    <div className="cell">
      <div className="popup" id={`popup-${id}`}>
        <div className="popup-text">
          <span>{capitalize(name)}</span>
          <div className="green-bar"></div>
          <div className="triangle"></div>
        </div>
      </div>
      <img
        className="pokemon"
        src={sprite}
        alt={`Pokemon ${id}`}
        id={id}
        value={loaded}
        onClick={handleClick}
      />
    </div>
  );
};

export default PokeCell;
