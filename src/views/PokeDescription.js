import "../styles/PokeDescription.css";
import { typesMetadata } from "../utils/Constants";
import { normalizeId } from "../utils/StringUtils";
import { loadPokemon } from "../utils/PokeUtils";

export default function PokeDescription(props) {
  let pokemon = loadPokemon(props.pokemon);

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="d-flex pb-1 pt-1 header-text">
          <div className="p-2 number">
            <p className="h2">{`N.º ${normalizeId(pokemon.id)}`}</p>
          </div>
          <div className="p-2">
            <p className="h2 name">{pokemon.name}</p>
          </div>
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
              <h3 className="card-title">
                {(pokemon.height / 10).toLocaleString("es-AR")} m
              </h3>
            </div>
          </div>

          <div className="card text-black p-0">
            <div className="card-header">Peso</div>
            <div className="card-body">
              <h3 className="card-title">
                {(pokemon.weight / 10).toLocaleString("es-AR")} kg
              </h3>
            </div>
          </div>
        </div>

        <div className="position-absolute mt-5">
          {pokemon.types.map((item) => {
            const type = item.type.name;
            const tipo = typesMetadata.localization[type];
            const bgColor = typesMetadata.backgroundColors[type];
            return (
              <p
                key={`type-${item.slot}`}
                className="badge types mb-3"
                style={{ backgroundColor: bgColor }}
              >
                <img
                  className="icon"
                  src={`assets/icons/${type}.svg`}
                  alt="icon"
                />
                {tipo}
              </p>
            );
          })}
        </div>

        <div className="mt-4 text-center">
          <img
            className="img"
            src={pokemon.image}
            alt={`Pokemon ${pokemon.id}`}
          />
        </div>
      </div>
    </div>
  );
}

/*
          <div className="card card-right text-black bg-light p-0 mt-5">
            <div className="card-header">Habilidades</div>
            <div className="card-body">
              {pokemon.abilities.map((ability) => {
                return (
                  <p
                    className="card-title abilities"
                    key={`ability-${ability.slot}`}
                  >
                    {capitalize(ability.ability.name)}{" "}
                    {ability.is_hidden ? "(hidden)" : ""}
                  </p>
                );
              })}
            </div>
          </div>
*/
