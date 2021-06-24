export const PokemonInfoContent = (props) => {
  const { name, id, type, height, weight, abilities, sprites } = props;
  return (
    <div className="container-pokemon-info">
      <div className="pokemon-info">
        <div className="item-img-pokemon-info">
         <img src={sprites.other["official-artwork"].front_default} alt={name}/>
        </div>
        <div className="item-pokemon-info">
          <h1 className="title-info">Poké info</h1>
          <h2 className="title-info">{name}</h2>
          <p><strong>Id:</strong> {id}</p>
          <p><strong>Tipo: </strong>{type[0].type.name}</p> 
          <p><strong>Estatura: </strong>{height}</p>
          <p><strong>Peso: </strong>{weight}</p>
          <p><strong>Habilidades: </strong></p>
          <ul>
            {abilities.map((ability, index)=>(<li key={index}>
              <p>{ability.ability.name}</p>
            </li>))}
          </ul>
        </div>
      </div>
    </div>
  );
};
