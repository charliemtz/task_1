import { icons } from "../utils/Constants";

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
              <img
                className="extra-info-icons extra-info-arrows"
                src={icons.leftArrow}
                alt="left arrow"
              />
            </div>
            <div className="col-10">
              <div className="row justify-content-around">
                <div className="col-2">
                  <img
                    className="extra-info-icons"
                    src={icons.stats}
                    alt="stats"
                  />
                </div>
                <div className="col-2">
                  <img
                    className="extra-info-icons"
                    src={icons.moves}
                    alt="moves"
                  />
                </div>
                <div className="col-2">
                  <img
                    className="extra-info-icons"
                    src={icons.encounters}
                    alt="encounters"
                  />
                </div>
                <div className="col-2">
                  <img
                    className="extra-info-icons"
                    src={icons.heldItems}
                    alt="held items"
                  />
                </div>
                <div className="col-2">
                  <img
                    className="extra-info-icons"
                    src={icons.species}
                    alt="species"
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <img
                className="extra-info-icons extra-info-arrows"
                src={icons.rightArrow}
                alt="right arrow"
              />
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
