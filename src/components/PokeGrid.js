import { useHistory } from "react-router-dom";
import PokeCell from "./PokeCell";
import "../styles/PokeGrid.css";

const PokeGrid = (props) => {
  const history = useHistory();

  const containerSizes = {
    gridTemplateColumns: "1fr ".repeat(props.cols[0]),
    gridTemplateRows: "1r ".repeat(props.rows[0]),
  };

  const handleGridClick = (e) => {
    if (e.target.attributes.value.value === "true") {
      props.onClick(e.target.id);
      // history.push("/pokedescription");
    }
  };

  return (
    <div className="row wrapper" style={containerSizes}>
      {props.pokemons.map((pokemon) => (
        <PokeCell
          id={pokemon.id}
          name={pokemon.name}
          sprite={pokemon.sprite}
          loaded={pokemon.loaded}
          handleClick={handleGridClick}
          key={`cell-${pokemon.id}`}
        />
      ))}
    </div>
  );
};

export default PokeGrid;
