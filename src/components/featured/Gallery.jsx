import React from "react";
import Carousel from "../reusable/Carousel";
import ImagePlaces from "./data/ImagePlaces";
import ImageHotels from "./data/ImageHotels";

const Gallery = (props) => {
  return (
    <div className="max-w-[1080px] mx-auto px-4 lg:px-0">
      <h1 className="text-2xl font-bold mt-6">{props.exploreHeading}</h1>
      <p className="text-base">{props.subHeading}</p>
      <Carousel imageGallery={ImagePlaces} />
      <div className="mt-8">
        <h1 className="text-2xl font-bold mt-12">{props.propertyHeading}</h1>
        <Carousel imageGallery={ImageHotels} />
      </div>
    </div>
  );
};

export default Gallery;
