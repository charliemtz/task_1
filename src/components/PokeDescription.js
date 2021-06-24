import 'bootstrap/dist/css/bootstrap.css';
import '../styles/PokeDescription.css';

function PokeDescription(props) {
  const typesBackground = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD'
  }

  let pokemon = {};
  if (props.pokemon.loaded === true) {
    pokemon = props.pokemon;
  } else {
    pokemon = {
      name: "Missingno",
      id: 0,
      loaded: true,
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Icon-round-Question_mark.svg",
      height: 0,
      types: [],
      weight: 0,
      abilities: []
    }
  }

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function normalizeId(id) {
    return String(id).padStart(3, '0');
  }

  /*const hexToLum = (hex) => {
    const aRgbHex = hex.substring(1).match(/.{1,2}/g);
    const [R, G, B] = [parseInt(aRgbHex[0], 16), parseInt(aRgbHex[1], 16), parseInt(aRgbHex[2], 16)];
    return (0.299*R + 0.587*G + 0.114*B);
  };*/

  return(
    <div className="container-fluid p-0 min-vh-100">
      <div className="header">
        <div className="d-flex pb-3 pt-3 header-text column">
          <div className="me-5 p-2"><p className="h2">{`N.º ${normalizeId(pokemon.id)}`}</p></div>
          <div className="p-2"><p className="h2">{capitalize(pokemon.name)}</p></div>
        </div>
      </div>
      <div className="header row">
        <div className="header-text progress center-block">
          <div className="progress-bar"></div>
        </div>
      </div>
      <div className="contents row">  

        <div className="position-absolute cards-left">
          <div className="card text-black bg-light mb-1 p-0">
            <div className="card-header">Altura</div>
            <div className="card-body">
              <h3 className="card-title">{(pokemon.height / 10).toLocaleString('es-AR')} m</h3>
            </div>
          </div>

          <div className="card text-black bg-light p-0">
            <div className="card-header">Peso</div>
            <div className="card-body">
              <h3 className="card-title">{(pokemon.weight / 10).toLocaleString('es-AR')} kg</h3>
            </div>
          </div>
        </div>

        <div className="position-absolute mt-5">
          {pokemon.types.map((item) => {
            const type = item.type.name;
            const bgColor = typesBackground[type];
            return <p key={`type-${item.slot}`} className="badge types mb-3" style={{backgroundColor: bgColor}}>{type}</p>
          })}

          <div className="card card-right text-black bg-light p-0 mt-5">
            <div className="card-header">Habilidades</div>
            <div className="card-body">
              {pokemon.abilities.map((ability) => {
                return <p className="card-title abilities" key={`ability-${ability.slot}`}>{capitalize(ability.ability.name)} {(ability.is_hidden ? "(hidden)" : "")}</p>
              })}
            </div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <img className="img" src={pokemon.image} alt={`Pokemon ${pokemon.id}`}/>
        </div>
      
      </div>
    </div>
  );
}

export default PokeDescription;


/* <div className="footer row m-4">
  <div className="bg-white rounded">
    <p></p>
  </div>
</div> */