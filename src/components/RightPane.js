import PokeBall from "./PokeBall";
import PokeCard from "./PokeCard";
import "../styles/RightPane.css";

const RightPane = (props) => {
  const { clickedPokemon, showPokemon, setShowPokemon, setNewId } = props;

  if (showPokemon) {
    return (
      <PokeCard pokemon={clickedPokemon} setShowPokemon={setShowPokemon} />
    );
  } else {
    return (
      <PokeBall setNewId={setNewId} possibleNumbers={props.possibleNumbers} />
    );
  }
};

export default RightPane;
