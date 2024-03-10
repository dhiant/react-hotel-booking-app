import React from "react";
import { IoBedOutline } from "react-icons/io5";
import { IoAirplaneOutline } from "react-icons/io5";
import { RiCarLine } from "react-icons/ri";
import { MdOutlineAttractions } from "react-icons/md";
import { RiTaxiWifiLine } from "react-icons/ri";

const navbar = () => {
  return (
    <div className="text-white w-full md:max-w-[1080px] mx-auto flex gap-3 flex-wrap">
      <button className="bg-primaryLight border-white border-2 rounded-full inline-flex justify-center items-center px-3 py-2">
        <IoBedOutline />
        <span className="ml-2">Stays</span>
      </button>
      <a
        href="https://booking.kayak.com/?&sid=74660c001dd0d4c55c1b7bcd0a8b7ca5&aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaKsBiAEBmAEJuAEXyAEM2AEB6AEB-AELiAIBqAIDuAKXnr6TBsACAdICJDViMTRlNjRjLTU4MzktNDRmMC05ZWFkLTgyZDA3YzYwZWE2ZdgCBuACAQ"
        alt="search flights"
      >
        <button className="hover:bg-primaryLight rounded-full inline-flex justify-center items-center px-3 py-2">
          <IoAirplaneOutline />
          <span className="ml-2">Flights</span>
        </button>
      </a>
      <a
        href="https://www.booking.com/cars/index.en-gb.html?label=gen173nr-1FCAEoggI46AdIM1gEaKsBiAEBmAEJuAEXyAEM2AEB6AEB-AELiAIBqAIDuAKXnr6TBsACAdICJDViMTRlNjRjLTU4MzktNDRmMC05ZWFkLTgyZDA3YzYwZWE2ZdgCBuACAQ&sid=74660c001dd0d4c55c1b7bcd0a8b7ca5&adplat=cross_product_bar&"
        alt="car rentals"
      >
        <button className="hover:bg-primaryLight rounded-full inline-flex justify-center items-center px-3 py-2">
          <RiCarLine />
          <span className="ml-2">Car rentals</span>
        </button>
      </a>
      <a
        href="https://www.booking.com/attractions/index.en-gb.html?label=gen173nr-1FCAEoggI46AdIM1gEaKsBiAEBmAEJuAEXyAEM2AEB6AEB-AELiAIBqAIDuAKXnr6TBsACAdICJDViMTRlNjRjLTU4MzktNDRmMC05ZWFkLTgyZDA3YzYwZWE2ZdgCBuACAQ&sid=74660c001dd0d4c55c1b7bcd0a8b7ca5"
        alt="search your favourite destinations"
      >
        <button className="hover:bg-primaryLight rounded-full inline-flex justify-center items-center px-3 py-2">
          <MdOutlineAttractions />
          <span className="ml-2">Attractions</span>
        </button>
      </a>
      <a
        href="https://www.booking.com/taxi/index.en-gb.html?label=gen173nr-1FCAEoggI46AdIM1gEaKsBiAEBmAEJuAEXyAEM2AEB6AEB-AELiAIBqAIDuAKXnr6TBsACAdICJDViMTRlNjRjLTU4MzktNDRmMC05ZWFkLTgyZDA3YzYwZWE2ZdgCBuACAQ&sid=74660c001dd0d4c55c1b7bcd0a8b7ca5&adplat=cross_product_bar&"
        alt="book airport taxi"
      >
        <button className="hover:bg-primaryLight rounded-full inline-flex justify-center items-center px-3 py-2">
          <RiTaxiWifiLine />
          <span className="ml-2">Airport Taxis</span>
        </button>
      </a>
    </div>
  );
};

export default navbar;
