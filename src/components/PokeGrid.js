import PokeCell from "./PokeCell";
import "../styles/PokeGrid.css";

const PokeGrid = (props) => {
  const { pokemons, rows, cols, setClickedId, setShowPokemon } = props;

  const containerSizes = {
    gridTemplateColumns: "1fr ".repeat(cols),
    gridTemplateRows: "1r ".repeat(rows),
  };

  return (
    <div className="row wrapper" style={containerSizes}>
      {pokemons.map((pokemon) => (
        <PokeCell
          id={pokemon.id}
          name={pokemon.name}
          sprite={pokemon.sprite}
          loaded={pokemon.loaded}
          setClickedId={setClickedId}
          setShowPokemon={setShowPokemon}
          key={`cell-${pokemon.id}`}
        />
      ))}
    </div>
  );
};

export default PokeGrid;
