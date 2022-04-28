import React from "react";
import { MdOutlineBed } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineInformationCircle } from "react-icons/hi";
import Button from "./Button";

const CheckIn = () => {
  return (
    <div className="max-w-[1080px] mx-auto -mt-8">
      <div className="flex flex-col flex-wrap md:flex-row shadow-xl rounded">
        <label
          htmlFor="place"
          className="relative grow  block border-4 border-highlight"
        >
          <i className=" absolute left-3 top-4 text-stone-500">
            <MdOutlineBed />
          </i>
          <input
            id="place"
            type="text"
            placeholder="Where are you going?"
            className="px-8 py-3 w-full "
          />
        </label>
        <label
          htmlFor="date"
          className="relative block md:border-y-4 border-x-4 md:border-x-0 border-highlight"
        >
          <i className=" absolute left-3 top-4 text-stone-500">
            <BiCalendar />
          </i>
          <input
            id="date"
            type="button"
            value="Check-in - Check-out"
            className="px-8 py-3 bg-white hover:cursor-pointer"
          />
        </label>
        <label
          htmlFor="persons"
          className="relative block border-4 border-highlight"
        >
          <i className=" absolute left-3 top-4 text-stone-500">
            <BsPerson />
          </i>
          <i className=" absolute right-3 top-2 text-stone-500">
            <MdKeyboardArrowUp />
            <MdKeyboardArrowDown />
          </i>
          {/* <input
            id="persons"
            type="button"
            value="2 adults . 9 children . 1 room"
            className="px-8 py-3 bg-white hover:cursor-pointer"
          /> */}
          <button className="px-8 py-3 bg-white flex gap-x-1 ">
            <span>2 adults </span>{" "}
            <span className="leading-none font-bold">.</span>{" "}
            <span>9 children </span>
            <span className="leading-none font-bold">.</span>{" "}
            <span>1 room </span>
          </button>
        </label>
        <div className="md:border-y-4 border-highlight border-r-4">
          <Button text="Search" />
        </div>
      </div>

      <label htmlFor="traveling_work" className="flex items-center mt-4 ">
        <input
          type="checkbox"
          name=""
          id="traveling_work"
          className="w-5 h-5"
        />
        <span className="px-4">I'm traveling for work</span>
      </label>
      <div className="border-4 border-border px-4 py-3 mt-10 flex items-center">
        <i className="bg-orange-100 p-3">
          <HiOutlineInformationCircle className="w-5 h-5 stroke-orange-800" />
        </i>
        <span className="pl-4 hidden sm:block">
          Get the advice you need. Check the latest COVID-19 restrictions before
          you travel.
        </span>
        <a
          className="text-primary pl-10 md:pl-2"
          href="https://www.booking.com/covid-19.html?label=gen173nr-1DCAEoggI46AdIM1gEaKsBiAEBmAExuAEXyAEM2AED6AEB-AECiAIBqAIDuAKu6pKTBsACAdICJDFmYjFiNTU0LTNkNmEtNDU4OS05NGRlLTUyOTdkMTVmYjc5Y9gCBOACAQ&aid=304142"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default CheckIn;
