import React from "react";
import HeroSection from "./components/HeroSection";
import CheckIn from "./components/CheckIn";
import Gallery from "./components/Gallery";
import SuggestedLocations from "./components/SuggestedLocationsGallery";
import GuestsTravelers from "./components/Guests&Travelers";
const App = () => {
  return (
    <div>
      <HeroSection />
      <CheckIn />
      <Gallery
        exploreHeading="Explore Nepal"
        subHeading="These popular destinations have a lot to offer"
        propertyHeading="Browse by property type"
      />
      <SuggestedLocations articleHeading="Get inspiration for your next trip" />
      <GuestsTravelers />
    </div>
  );
};

export default App;
