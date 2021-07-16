import { legibilize } from "../utils/StringUtils";

const BarData = (props) => {
  const { name, value } = props;
  return (
    <p>
      {legibilize(name)}: {value}
    </p>
  );
};

export default BarData;
