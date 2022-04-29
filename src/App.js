import React from "react";
import HeroSection from "./components/herosection/HeroSection";
import CheckIn from "./components/herosection/CheckIn";
import Gallery from "./components/Gallery";
import SuggestedLocations from "./components/SuggestedLocationsGallery";
import GuestsTravelers from "./components/Guests&Travelers";

import HomeGuest from "./data/HomeGuest";
import OtherTravelers from "./data/OtherTravelers";
import LogIn from "./components/logIn";

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
      {/* Home Guest Section */}
      <GuestsTravelers
        heading="Homes Guests Love"
        imgGallery={HomeGuest}
        currency="Starting from NPR"
        ratingBox="block"
        discoverHomesCard="block"
        // otherTravelers="Connect With Other Travelers"
      />
      {/* Other Travelers Section */}
      <GuestsTravelers
        heading="Connect With Other Travelers"
        imgGallery={OtherTravelers}
        currency=""
        ratingBox="hidden"
        discoverHomesCard="hidden"
        // otherTravelers="Connect With Other Travelers"
      />
      {/* Login Section */}
      <LogIn />
    </div>
  );
};

export default App;
