import BarData from "./BarData";

const StatsInfo = ({ data }) => {
  return Object.keys(data).map((property) => (
    <BarData name={property} value={data[property]} key={property} />
  ));
};

export default StatsInfo;
