import "../styles/PokeNavBar.css";

const PokeNavBar = (props) => {
  const { discoveredPokemons } = props;

  return (
    <div className="poke-nav-bar">
      <div className="checklist-container">
        <h2>
          <img
            className="checklist"
            src="assets/images/checklist.png"
            alt="checklist"
          />
          Todos
        </h2>
      </div>
      <div className="triangle-rectangle"></div>
      <div className="registered">
        <img
          className="pokeball-icon"
          src="assets/images/pokeball-icon.png"
          alt="pokeball-icon"
        />
        <span className="me-5">Pokémon registrados: </span>
        <span>{discoveredPokemons}</span>
      </div>
    </div>
  );
};

export default PokeNavBar;
