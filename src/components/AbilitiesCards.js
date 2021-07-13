import { capitalize } from "../utils/StringUtils";

const AbilitiesCards = (props) => {
  const { abilities } = props;

  return (
    <div className="card card-right text-black bg-light p-0 mt-5">
      <div className="card-header">Habilidades</div>
      <div className="card-body">
        {abilities.map((ability) => {
          return (
            <p className="card-title abilities" key={`ability-${ability.slot}`}>
              {capitalize(ability.ability.name)}{" "}
              {ability.is_hidden ? "(hidden)" : ""}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default AbilitiesCards;
