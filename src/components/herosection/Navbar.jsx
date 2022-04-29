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
      <button className="hover:bg-primaryLight rounded-full inline-flex justify-center items-center px-3 py-2">
        <IoAirplaneOutline />
        <span className="ml-2">Flights</span>
      </button>
      <button className="hover:bg-primaryLight rounded-full inline-flex justify-center items-center px-3 py-2">
        <RiCarLine />
        <span className="ml-2">Car rentals</span>
      </button>
      <button className="hover:bg-primaryLight rounded-full inline-flex justify-center items-center px-3 py-2">
        <MdOutlineAttractions />
        <span className="ml-2">Attractions</span>
      </button>
      <button className="hover:bg-primaryLight rounded-full inline-flex justify-center items-center px-3 py-2">
        <RiTaxiWifiLine />
        <span className="ml-2">Airport Taxis</span>
      </button>
    </div>
  );
};

export default navbar;
