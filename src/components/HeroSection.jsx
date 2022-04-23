import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Button from "./Button";

const HeroSection = () => {
  return (
    <div className="bg-primary">
      <Header />
      <Navbar />
      <div className="text-white max-w-[1080px] mt-8 md:mt-16 mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold">
          A lifetime of discounts? It's Genius.
        </h2>
        <p className="text-xl md:text-2xl mt-2 max-w-[950px]">
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free Booking.com account
        </p>
        <Button signIN="Sign in / Register" />
      </div>
    </div>
  );
};

export default HeroSection;
