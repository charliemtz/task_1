import { isNotEmpty } from "../utils/ObjectUtils";
import StatsInfo from "./StatsInfo";

const PokeExtraData = (props) => {
  const { tabExtraInfo, data } = props;
  console.log(data);
  let flavourText = "";
  switch (tabExtraInfo) {
    case 1:
      if (isNotEmpty(data)) {
        let total = 0;
        for (const stat in data) {
          total += data[stat];
        }
        return (
          <div>
            <StatsInfo data={data} />
            <p>Total: {total}</p>
          </div>
        );
      } else {
        flavourText = "Este Pokémon parece no tener stats.";
      }
      break;
    case 2:
      if (data.length !== 0) {
        // jsx = <div>hello there.</div>;
      } else {
        flavourText = "Este Pokémon parece no tener moves.";
      }
      break;
    case 3:
      if (isNotEmpty(data)) {
        // jsx = <div>hello there.</div>;
      } else {
        flavourText =
          "Este Pokémon parece no haber sido avistado de forma salvaje.";
      }
      break;
    case 4:
      if (data.length !== 0) {
        //jsx = <div>hello there.</div>;
      } else {
        flavourText =
          "Este Pokémon parece no tener llevar items al ser capturado.";
      }
      break;
    case 5:
      if (isNotEmpty(data)) {
        //jsx = <div>hello there.</div>;
      } else {
        flavourText =
          "El profesor Pokémon parece no conocer sobre la biología de este Pokémon.";
      }
      break;
    default:
      break;
  }
  return <div>{flavourText}</div>;
};

export default PokeExtraData;
