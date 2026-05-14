import React from "react";
import { Bouncy } from "ldrs/react";
import "ldrs/react/Bouncy.css";

// Default values shown

const Loading = () => {
  return (
    <div className="card w-full h-80 flex items-center justify-center">
      <Bouncy size="45" speed="1.75" color="black" />
    </div>
  );
};

export default Loading;
