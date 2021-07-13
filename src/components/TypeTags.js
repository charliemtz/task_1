import { typesMetadata } from "../utils/Constants";
import "../styles/TypeTags.css";

const TypeTags = (props) => {
  const { types } = props;

  return (
    <div className="position-absolute mt-5">
      {types.map((item) => {
        const type = item.type.name;
        const tipo = typesMetadata.localization[type];
        const bgColor = typesMetadata.backgroundColors[type];
        return (
          <p
            key={`type-${item.slot}`}
            className="badge types mb-3"
            style={{ backgroundColor: bgColor }}
          >
            <img className="icon" src={`assets/icons/${type}.svg`} alt="icon" />
            {tipo}
          </p>
        );
      })}
    </div>
  );
};

export default TypeTags;
