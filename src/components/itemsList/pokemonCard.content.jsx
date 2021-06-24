import { Link } from "react-router-dom";
import "./styles.css";

export const PokemonCardContent = ({ name, img, id }) => {
  return (
    <div className="container-pokemon-card">
      <div className="item-card  item-card-img">
      <span className="item-card">Nº: {id}</span>
        <img className="img-content" src={img} alt={name} />
      </div>
      <div className="item-info">
        <div className="item-card">
          <div className="item-card">
            
            <div className="item-card">
              <p>{name}</p>
            </div>
          </div>
        </div>

        <div className="item-card">
          <Link
            to={{
              pathname: `/pokemon/info`,
              state: { fromDashBoard: true, id },
            }}
          >
            <button className="item-card btn-card">VER INFO</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
