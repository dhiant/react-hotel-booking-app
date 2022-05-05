import React from "react";

const HoverLabel = ({ text }) => {
  return (
    <div className={` bg-black text-white absolute w-max`}>
      <h1 className="p-1 text-sm">{text}</h1>
    </div>
  );
};

export default HoverLabel;
