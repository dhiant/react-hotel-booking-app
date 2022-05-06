import React from "react";
import { IoIosStar } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { RiLeafLine } from "react-icons/ri";
import Button from "./reusable/Button";
import { BiChevronRight } from "react-icons/bi";
const HotelItem = () => {
  return (
    <div className="max-w-5xl px-2 py-3 border-2 border-border flex relative">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/80954498.jpg?k=7b053f159c2196c9db49d70cfd3e43bbe823865f681ad7a5a291cbdad06a0186&o=&hp=1"
        alt="a hotel room with two bed and two lamps located in Kathmandu Nepal"
        className="w-40 h-40 sm:w-56 sm:h-48"
      />
      {/* Hotel Name and other details */}
      <div className="mt-2 px-2">
        <div className="md:flex">
          <h1 className="text-xl font-bold text-secondary hover:text-highlight">
            Hotel Buddha
          </h1>
          <span className="flex items-center px-2">
            <IoIosStar className="w-5 h-5 fill-highlight" />
            <IoIosStar className="w-5 h-5 fill-highlight" />
            <IoIosStar className="w-5 h-5 fill-highlight" />
            <AiFillLike className="w-5 h-5 fill-highlight" />
          </span>
        </div>
        <div className="">
        <p className="text-xs text-secondary font-semibold underline">
          Thamel, Kathmandu
          <span className="px-3">Show on map</span>
          <span className="no-underline text-black hidden xs:block">2.5 km from centre</span>
        </p>
        <p className="text-xs hidden xs:flex items-center gap-1.5 mt-2">
          <i>
            <RiLeafLine className="w-4 h-4" />
          </i>
          Travel Sustainable Property
        </p>
        </div>
        <div className="hidden sm:flex flex-col mt-2 pl-4">
          <h1 className="text-xs font-bold">Standard Double or Twin Room</h1>
          <p className="text-xs">Beds:1 double or 2 singles</p>
          <h1 className="text-xs font-bold text-[#008009] mt-2">
            Breakfast included
          </h1>
        </div>
      </div>
      {/* Reviews and Costs */}
      <div className="pl-1 pr-2">
        {/* reviews box */}
        <div className="md:ml-2 md:pl-12 mt-1 hidden sm:block">
          <div className="flex gap-2">
            <div>
              <h1 className="text-base font-medium">Very good</h1>
              <p className="text-xs text-textLight">613 reviews</p>
            </div>
            <div className="text-white text-base p-4 font-medium w-[28px] h-[28px] bg-primary flex items-center justify-center rounded-t-md rounded-r-md rounded-br-md rounded-bl-none">
              8.3
            </div>
          </div>
          <h1 className="text-sm font-bold text-secondary mt-1 xl:ml-8">
            Comfort 8.2
          </h1>
          
        </div>
        {/* Cost */}
        <div className="hidden md:flex flex-col mt-3">
          <p className="text-xs text-textLight text-right">
            8 nights, 2 adults
          </p>
          <h1 className="text-xl text-[#ff8000] font-bold text-right">
            NPR 24,635
          </h1>
          <p className="text-xs text-textLight text-right">
            Include taxes and charges
          </p>
          <div className="mt-3 relative">
            <Button text="See availability" padding="px-4 py-3 pr-10" />
            <BiChevronRight className="absolute top-[10px] right-3 w-5 h-5 text-white" />
          </div>
        </div>
        <div className="block md:hidden absolute bottom-1 xs:bottom-2 right-3">
        <Button text = "Explore" padding="px-6 py-2" />
        </div>
      </div>
    </div>
  );
};

export default HotelItem;
