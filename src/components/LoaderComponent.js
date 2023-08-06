import React from "react";
import { CirclesWithBar } from "react-loader-spinner";

const LoaderComponent = ({ height = "100" }) => {
  return (
    <div className="loader-indicator">
      <CirclesWithBar
        height={height}
        width="100"
        color="#d6766f"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    </div>
  );
};

export default LoaderComponent;
