import { icons } from "../utils/Constants";
import PokeExtraArrow from "./PokeExtraArrow";
import PokeExtraData from "./PokeExtraData";
import PokeExtraIcon from "./PokeExtraIcon";
import "../styles/PokeExtraInfo.css";

const PokeExtraInfo = (props) => {
  const { extraInfo, tabExtraInfo, setTabExtraInfo } = props;
  const tab = Object.keys(extraInfo)[tabExtraInfo - 1];
  const extraInfoSlice = extraInfo[tab];

  return (
    <div className="extra-info-container">
      <div className="extra-info-header row">
        <div className="extra-info-header-left col-1"></div>
        <div className="extra-info-header-middle col-10">
          <div className="row">
            <div className="col">
              <PokeExtraArrow
                src={icons.leftArrow}
                alt="left arrow"
                id="left"
                setTabExtraInfo={setTabExtraInfo}
              />
            </div>
            <div className="col-10">
              <div className="row justify-content-evenly">
                <PokeExtraIcon
                  src={icons.stats}
                  alt="stats"
                  id={1}
                  tabExtraInfo={tabExtraInfo}
                  setTabExtraInfo={setTabExtraInfo}
                />
                <PokeExtraIcon
                  src={icons.moves}
                  alt="moves"
                  id={2}
                  tabExtraInfo={tabExtraInfo}
                  setTabExtraInfo={setTabExtraInfo}
                />
                <PokeExtraIcon
                  src={icons.encounters}
                  alt="encounters"
                  id={3}
                  tabExtraInfo={tabExtraInfo}
                  setTabExtraInfo={setTabExtraInfo}
                />
                <PokeExtraIcon
                  src={icons.heldItems}
                  alt="heldItems"
                  id={4}
                  tabExtraInfo={tabExtraInfo}
                  setTabExtraInfo={setTabExtraInfo}
                />
                <PokeExtraIcon
                  src={icons.species}
                  alt="species"
                  id={5}
                  tabExtraInfo={tabExtraInfo}
                  setTabExtraInfo={setTabExtraInfo}
                />
              </div>
            </div>
            <div className="col">
              <PokeExtraArrow
                src={icons.rightArrow}
                alt="right arrow"
                id="right"
                setTabExtraInfo={setTabExtraInfo}
              />
            </div>
          </div>
        </div>
        <div className="extra-info-header-right col-1"></div>
      </div>
      <div className="extra-info-data row">
        <PokeExtraData tabExtraInfo={tabExtraInfo} data={extraInfoSlice} />
      </div>
    </div>
  );
};

export default PokeExtraInfo;
