import React from "react";
// importing location icon
import { GoLocation } from "react-icons/go";

const DestinationsName = ({ location, setDestination }) => {
  return (
    <div
      className="hover:bg-border pl-3"
      onClick={() => setDestination(location)}
    >
      <button className="flex items-center mb-2 py-1m ">
        <GoLocation />
        <div className="pl-3 flex flex-col">
          <h1 className="font-medium text-sm">{location}</h1>
          <p className="text-xs text-textLight place-self-start">Nepal</p>
        </div>
      </button>
    </div>
  );
};

export default DestinationsName;
