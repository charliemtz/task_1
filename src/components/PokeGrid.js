import { useHistory } from "react-router-dom";
import { capitalize } from "../utils/StringUtils";
import "../styles/PokeGrid.css";

function PokeGrid(props) {
  const history = useHistory();

  const containerSizes = {
    gridTemplateColumns: "1fr ".repeat(props.cols[0]),
    gridTemplateRows: "1r ".repeat(props.rows[0]),
  };

  const handleClick = (e) => {
    if (e.target.attributes.value.value === "true") {
      props.onClick(e.target.id);
      history.push("/pokedescription");
    }
  };

  return (
    <div className="row top-row" style={containerSizes}>
      {props.pokemons.map((pokemon) => (
        <div key={`cell-${pokemon.id}`} className={`cell`}>
          <div className="popup" id={`popup-${pokemon.id}`}>
            <div className="popup-text">
              <span>{capitalize(pokemon.name)}</span>
              <div className="green-bar"></div>
              <div className="triangle"></div>
            </div>
          </div>
          <img
            className="pokemon"
            src={pokemon.sprite}
            alt={`Pokemon ${pokemon.id}`}
            id={pokemon.id}
            value={pokemon.loaded}
            onClick={handleClick}
          />
        </div>
      ))}
    </div>
  );
}
export default PokeGrid;
