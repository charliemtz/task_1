import { useHistory } from "react-router-dom";

function PokeGrid(props) {
    const history = useHistory();

    const containerSizes = {
        gridTemplateColumns: "0.8fr ".repeat(props.rows[0]),
        gridTemplateRows: "0.8fr ".repeat(props.cols[0])
    };

    const handleClick = (e) => {
        if (e.target.attributes.value.value === "true") {
            props.onClick(e.target.id);
            history.push('/pokedescription');
        }
    }

    return (
        <div className="row top-row rounded-3" style={containerSizes}>
        {props.pokemons.map((pokemon) =>
            <div key={`cell-${pokemon.id}`} className={`cell`}>
            <img 
                className="pokemon" 
                src={pokemon.sprite}
                alt={`Pokemon ${pokemon.id}`}
                id={pokemon.id}
                value={pokemon.loaded}
                onClick={handleClick}
            />
            </div>)}
        </div>
    );
}
export default PokeGrid;