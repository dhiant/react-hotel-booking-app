import React from "react";
import SuggestedGalleryCarousel from "./SuggestedGalleryCarousel";
import ImageSuggestedLocations from "../data/ImageSuggestedLocations";
import ImagePromoteList from "../data/ImagePromoteList";
import SuggestedCard from "./SuggestedCard";
import "../styles/Grid.css";

const SuggestedLocations = (props) => {
  return (
    <div>
      <div className="max-w-[1080px] mx-auto">
        <SuggestedGalleryCarousel
          imageSuggestedLocations={ImageSuggestedLocations}
        />
        <h1 className="text-2xl font-bold mt-8 -mb-4">
          {props.articleHeading}
        </h1>
        <div className="mt-10 containerGrid">
          {ImagePromoteList.map((item) => (
            <SuggestedCard
              id={item.id}
              key={item.id}
              img={item.img}
              link={item.link}
              property={item.property}
              title={item.title}
              width="w-full"
              height="h-[320px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuggestedLocations;
