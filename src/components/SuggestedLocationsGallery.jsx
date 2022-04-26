import React from "react";
import SuggestedGalleryCarousel from "./SuggestedGalleryCarousel";
import ImageSuggestedLocations from "../assets/ImageSuggestedLocations";

const SuggestedLocations = () => {
  return (
    <div className="max-w-[1080px] mx-auto mt-12">
      <SuggestedGalleryCarousel
        imageSuggestedLocations={ImageSuggestedLocations}
      />
    </div>
  );
};

export default SuggestedLocations;
