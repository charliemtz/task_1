import PokeItem from "./PokeItem";
import "../styles/PokeList.css";

const PokeList = (props) => {
  const { pokemons, setClickedId, setShowPokemon } = props;

  return (
    <div className="pokelist-container">
      <div className="pokelist-header">
        <p className="pokelist-header-text">Por número</p>
      </div>
      <div className="header-text progress center-block">
        <div className="bar green-bar-pokelist"></div>
      </div>
      <div className="pokelist">
        {pokemons.map((pokemon) => (
          <PokeItem
            name={pokemon.name}
            id={pokemon.id}
            key={`pokeitem-${pokemon.id}`}
            loaded={pokemon.loaded}
            image={pokemon.sprite}
            setClickedId={setClickedId}
            setShowPokemon={setShowPokemon}
          />
        ))}
      </div>
    </div>
  );
};

export default PokeList;
