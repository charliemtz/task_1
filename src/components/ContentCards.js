import { normalizeCard } from "../utils/StringUtils";
import "../styles/ContentCards.css";

const ContentCards = (props) => {
  const { height, weight } = props;

  return (
    <div className="align-self-center col-3">
      <div className="card text-black mb-2 p-0">
        <div className="card-header">Altura</div>
        <div className="card-body">
          <h3 className="card-title">{normalizeCard(height)} m</h3>
        </div>
      </div>

      <div className="card text-black p-0">
        <div className="card-header">Peso</div>
        <div className="card-body">
          <h3 className="card-title">{normalizeCard(weight)} kg</h3>
        </div>
      </div>
    </div>
  );
};

export default ContentCards;
