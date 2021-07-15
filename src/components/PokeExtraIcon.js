import "../styles/PokeExtraIcon.css";

const PokeExtraIcon = (props) => {
  const { src, alt, id, tabExtraInfo, setTabExtraInfo } = props;

  const handleClick = () => {
    setTabExtraInfo(id);
  };

  const active = id === tabExtraInfo;

  return (
    <div className="col-2">
      <img
        className={`extra-info-icons ${active ? "extra-info-icon-active" : ""}`}
        src={src}
        alt={alt}
        onClick={handleClick}
      />
    </div>
  );
};

export default PokeExtraIcon;
