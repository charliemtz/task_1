import { urls } from "../utils/Constants";

function PokeBall(props) {
  return (
    <div className="row bottom-row">
      <img
        className="pokeball"
        src={urls.pokeBall}
        alt="pokeball"
        onClick={props.onClick}
      />
    </div>
  );
}

export default PokeBall;
