import React from "react";
import BounceLoader from "react-spinners/BounceLoader";

const Loader = () => {
  return (
    <div>
      <BounceLoader
        style={{ color: "#1C1B1F", display: "block", margin: "0 auto", borderColor: "black" }}
        size={80}
        loading={true}
        speedMultiplier={1.5}
      />
    </div>
  );
};

export default Loader;
