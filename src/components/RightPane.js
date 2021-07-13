import PokeBall from "./PokeBall";
import PokeCard from "./PokeCard";
import "../styles/RightPane.css";

const RightPane = (props) => {
  const { pokeballClick, rightPane, setRightPane, clickedPokemon } = props;

  if (rightPane === "pokeball") {
    return <PokeBall onClick={pokeballClick} />;
  } else if (rightPane === "pokemon") {
    return <PokeCard setRightPane={setRightPane} pokemon={clickedPokemon} />;
  }
};

export default RightPane;
