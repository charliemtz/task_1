import "../styles/PokeImage.css";

export default function PokeImage(props) {
  const { image, name } = props;

  return (
    <div className="mt-4 text-center">
      <img className="img" src={image} alt={name} />
    </div>
  );
}
