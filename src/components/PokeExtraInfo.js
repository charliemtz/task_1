const PokeExtraInfo = (props) => {
  const { extraInfo, tabExtraInfo, setTabExtraInfo } = props;
  const extraInfoSlice = extraInfo[tabExtraInfo];
  console.log(extraInfoSlice);

  return (
    <div>
      <div></div>
    </div>
  );
};

export default PokeExtraInfo;
