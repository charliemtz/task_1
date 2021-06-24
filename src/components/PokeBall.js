function PokeBall(props) {
    const POKEBALL_URL = "https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg";
    return (
        <div className="row bottom-row">
        <img 
            className="pokeball" 
            src={POKEBALL_URL}
            alt="pokeball"
            onClick={props.onClick}
            style={{height: "150px"}}
            />
        </div>
    );
}

export default PokeBall;