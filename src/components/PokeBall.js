import { images } from "../utils/Constants";
import "../styles/RightPane.css";

const PokeBall = (props) => {
  const { onClick } = props;
  return (
    <div className="row pane align-content-center">
      <img
        className="right-images"
        src={images.pokeBall}
        alt="pokeball"
        onClick={onClick}
      />
    </div>
  );
};

export default PokeBall;
