import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperClass="blocks-wrapper"
      colors={["#90CAF9", "#90CAF9", "#90CAF9", "#90CAF9", "#90CAF9"]}
    />
  );
};

export default Loader;
