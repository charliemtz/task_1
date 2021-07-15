import { icons } from "../utils/Constants";
import PokeExtraArrow from "./PokeExtraArrow";
import PokeExtraIcon from "./PokeExtraIcon";
import "../styles/PokeExtraInfo.css";

const PokeExtraInfo = (props) => {
  const { extraInfo, tabExtraInfo, setTabExtraInfo } = props;
  const extraInfoSlice = extraInfo[tabExtraInfo];

  return (
    <div className="extra-info-container">
      <div className="extra-info-header row">
        <div className="extra-info-header-left col-2"></div>
        <div className="extra-info-header-middle col-8">
          <div className="row">
            <div className="col">
              <PokeExtraArrow src={icons.leftArrow} alt="left arrow" />
            </div>
            <div className="col-10">
              <div className="row justify-content-around">
                <PokeExtraIcon src={icons.stats} alt="stats" />
                <PokeExtraIcon src={icons.moves} alt="moves" />
                <PokeExtraIcon src={icons.encounters} alt="encounters" />
                <PokeExtraIcon src={icons.heldItems} alt="heldItems" />
                <PokeExtraIcon src={icons.species} alt="species" />
              </div>
            </div>
            <div className="col">
              <PokeExtraArrow src={icons.rightArrow} alt="right arrow" />
            </div>
          </div>
        </div>
        <div className="extra-info-header-right col-2"></div>
      </div>
      <div className="extra-info-data row"></div>
    </div>
  );
};

export default PokeExtraInfo;
