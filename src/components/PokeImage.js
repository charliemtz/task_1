import "../styles/PokeImage.css";

const PokeImage = (props) => {
  const { image, name, size } = props;

  return (
    <div className="col-6">
      <div className="text-center">
        <img className="img" src={image} alt={name} style={{ height: size }} />
      </div>
    </div>
  );
};

export default PokeImage;
