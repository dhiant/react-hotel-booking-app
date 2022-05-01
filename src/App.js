import React from "react";
import HeroSection from "./components/herosection/HeroSection";
import CheckIn from "./components/herosection/CheckIn";
import Gallery from "./components/featured/Gallery";
import SuggestedLocations from "./components/featured/SuggestedLocationsGallery";
import GuestsTravelers from "./components/featured/Guests&Travelers";

import HomeGuest from "./components/featured/data/HomeGuest";
import OtherTravelers from "./components/featured/data/OtherTravelers";
import LogIn from "./components/logIn";
import CountryList from "./components/CountryList";
import MailList from "./components/MailList";
import Footer from "./components/footer/Footer";
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
      <CountryList />
      <MailList />
      <Footer />
    </div>
  );
};

export default App;
