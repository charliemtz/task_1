import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { images } from "../utils/Constants";
import "../styles/PokeNavBar.css";

const PokeNavBar = (props) => {
  const { discoveredPokemons } = props;
  const history = useHistory();
  const [today, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const time = today.toLocaleTimeString("es-AR", {
    hour: "numeric",
    hour12: false,
    minute: "numeric",
  });

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div className="poke-nav-bar row">
      <div className="col-3">
        <div className="todos-container" onClick={handleClick}>
          <h2>
            <img className="checklist" src={images.checklist} alt="checklist" />
            Todos
          </h2>
        </div>
        <div className="triangle-rectangle"></div>
      </div>
      <div className="registered col-6">
        <p className="poke-nav-bar-text registered-text me-5">
          <img
            className="pokeball-icon"
            src={images.pokeballIcon}
            alt="pokeball-icon"
          />
          Pokémon registrados: &emsp;&emsp; {discoveredPokemons}
        </p>
      </div>
      <div className="col-3">
        <p className="poke-nav-bar-text hour">
          {time}
          <img className="avatar" src={images.avatar} alt="avatar" />
        </p>
      </div>
    </div>
  );
};

export default PokeNavBar;
