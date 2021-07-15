const PokeCell = (props) => {
  const { id, name, sprite, loaded, setClickedId, setShowPokemon } = props;

  const onClick = () => {
    if (loaded) {
      setClickedId(id - 1);
      setShowPokemon(true);
    }
  };

  return (
    <div className="cell">
      <div className="popup" id={`popup-${id}`}>
        <div className="popup-text">
          <span>{name}</span>
          <div className="green-bar"></div>
          <div className="triangle"></div>
        </div>
      </div>
      <img
        className="pokemon"
        src={sprite}
        alt={`Pokemon ${id}`}
        id={id}
        value={loaded}
        onClick={onClick}
      />
    </div>
  );
};

export default PokeCell;
