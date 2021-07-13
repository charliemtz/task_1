import { images } from "../utils/Constants";
import "../styles/PokeBall.css";

const PokeBall = (props) => {
  const { onClick } = props;
  return (
    <div className="row bottom-row">
      <img
        className="pokeball"
        src={images.pokeBall}
        alt="pokeball"
        onClick={onClick}
      />
    </div>
  );
};

export default PokeBall;
