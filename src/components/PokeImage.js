import "../styles/PokeImage.css";

const PokeImage = (props) => {
  const { image, name, size } = props;

  return (
    <div className="mt-4 text-center">
      <img className="img" src={image} alt={name} style={{ height: size }} />
    </div>
  );
};

export default PokeImage;
