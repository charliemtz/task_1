import { randomNumberGenerator } from "../utils/NumberUtils";
import { N } from "../utils/Constants";
import { images } from "../utils/Constants";
import "../styles/RightPane.css";

const PokeBall = (props) => {
  const { setNewId } = props;
  let { possibleNumbers } = props;

  const handleClick = () => {
    let randomId;
    if (possibleNumbers.length > 0) {
      do {
        randomId = randomNumberGenerator(N);
      } while (!possibleNumbers.includes(randomId));
      possibleNumbers = possibleNumbers.filter((number) => randomId !== number);
      setNewId(randomId);
    }
  };

  return (
    <div className="row pane align-content-center">
      <img
        className="right-images"
        src={images.pokeball}
        alt="pokeball"
        onClick={handleClick}
      />
    </div>
  );
};

export default PokeBall;
