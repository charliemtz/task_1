import '../styles/PokeDescription.css';

function PokeDescription(props) {
  const tiposTraducidos = {
    normal: 'normal',
    fire: 'fuego',
    water: 'agua',
    electric: 'eléctrico',
    grass: 'planta',
    ice: 'hielo',
    fighting: 'lucha',
    poison: 'veneno',
    ground: 'tierra',
    flying: 'volador',
    psychic: 'psíquico',
    bug: 'bicho',
    rock: 'roca',
    ghost: 'fantasma',
    dragon: 'dragón',
    dark: 'siniestro',
    steel: 'acero',
    fairy: 'hada'
  }

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

  return(
    <div className="container-fluid">
      <div className="header">
        <div className="d-flex pb-1 pt-1 header-text">
          <div className="p-2 number"><p className="h2">{`N.º ${normalizeId(pokemon.id)}`}</p></div>
          <div className="p-2"><p className="h2 name">{pokemon.name}</p></div>
        </div>
      </div>
      <div className="header row">
        <div className="header-text progress center-block">
          <div className="bar"></div>
        </div>
      </div>
      <div className="contents row">  

        <div className="position-absolute cards-left">
          <div className="card text-black mb-2 p-0">
            <div className="card-header">Altura</div>
            <div className="card-body">
              <h3 className="card-title">{(pokemon.height / 10).toLocaleString('es-AR')} m</h3>
            </div>
          </div>

          <div className="card text-black p-0">
            <div className="card-header">Peso</div>
            <div className="card-body">
              <h3 className="card-title">{(pokemon.weight / 10).toLocaleString('es-AR')} kg</h3>
            </div>
          </div>
        </div>

        <div className="position-absolute mt-5">
          {pokemon.types.map((item) => {
            const type = item.type.name;
            const tipo = tiposTraducidos[type];
            const bgColor = typesBackground[type];
            return <p key={`type-${item.slot}`} className="badge types mb-3" style={{backgroundColor: bgColor}}><img className="icon" src={`/icons/${type}.svg`} alt="icon"/>{tipo}</p>;
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
