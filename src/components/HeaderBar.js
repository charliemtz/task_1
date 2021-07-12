import { normalizeId } from "../utils/StringUtils";
import "../styles/HeaderBar.css";

export default function HeaderBar(props) {
  const { id, name } = props;

  return (
    <div className="wrapper">
      <div className="header">
        <div className="d-flex pb-1 pt-1 header-text">
          <div className="p-2 number">
            <p className="h2">{`N.º ${normalizeId(id)}`}</p>
          </div>
          <div className="p-2">
            <p className="h2 name">{name}</p>
          </div>
        </div>
      </div>
      <div className="header row">
        <div className="header-text progress center-block">
          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
}
