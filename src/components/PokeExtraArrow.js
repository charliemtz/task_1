import "../styles/PokeExtraArrow.css";

const PokeExtraArrow = (props) => {
  const { src, alt, id, setTabExtraInfo } = props;

  const handleClick = () => {
    switch (id) {
      case "left":
        setTabExtraInfo((prev) => (prev - 1 > 0 ? prev - 1 : 5));
        break;
      case "right":
        setTabExtraInfo((prev) => (prev + 1 <= 5 ? prev + 1 : 1));
        break;
      default:
        break;
    }
  };

  return (
    <img
      className="extra-info-arrows"
      src={src}
      alt={alt}
      onClick={handleClick}
    />
  );
};

export default PokeExtraArrow;
