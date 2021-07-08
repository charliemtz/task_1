import { images } from "../utils/Constants";

function PokeBall(props) {
  return (
    <div className="row bottom-row">
      <img
        className="pokeball"
        src={images.pokeBall}
        alt="pokeball"
        onClick={props.onClick}
      />
    </div>
  );
}

export default PokeBall;
