import "../styles/PokeExtraArrow.css";

const PokeExtraArrow = (props) => {
  const { src, alt } = props;
  return (
    <img className="extra-info-icons extra-info-arrows" src={src} alt={alt} />
  );
};

export default PokeExtraArrow;
