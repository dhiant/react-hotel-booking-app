import React from "react";
import SuggestedLocations from "../assets/SuggestedLocations";
import SuggestedCard from "./SuggestedCard";
const SuggestedPlaces = () => {
  return (
    <div className="max-w-[1080px] mx-auto mt-12">
      <div className="flex flex-wrap gap-4">
        {SuggestedLocations.map((item) => (
          <a href={item.link} target="_blank" rel="noreferrer">
            <SuggestedCard
              key={item.id}
              title={item.title}
              property={item.property}
              price={item.price}
              image={item.image}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SuggestedPlaces;
