import "../styles/PokeExtraIcon.css";

const PokeExtraIcon = (props) => {
  const { src, alt } = props;
  return (
    <div className="col-2">
      <img className="extra-info-icons" src={src} alt={alt} />
    </div>
  );
};

export default PokeExtraIcon;
