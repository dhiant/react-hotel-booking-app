import React from "react";
import HeroSection from "./components/HeroSection";
import CheckIn from "./components/CheckIn";
import Gallery from "./components/Gallery";
import ImagePlaces from "./assets/ImagePlaces";
import ImageHotels from "./assets/ImageHotels";
import SuggestedPlaces from "./components/SuggestedPlacesGallery";
const App = () => {
  return (
    <div>
      <HeroSection />
      <CheckIn />
      <Gallery
        heading="Explore Nepal"
        subHeading="These popular destinations have a lot to offer"
        imageGallery={ImagePlaces}
      />
      <Gallery heading="Browse by property type" imageGallery={ImageHotels} />
      <SuggestedPlaces />
    </div>
  );
};

export default App;
