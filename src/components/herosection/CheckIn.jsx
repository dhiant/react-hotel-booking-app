import React from "react";
import { MdOutlineBed } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineInformationCircle } from "react-icons/hi";
import Button from "../reusable/Button";

// importing react date range
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";
// to format date into string
import { format } from "date-fns";

const CheckIn = () => {
  // to hide and show the date calendar
  const [openingDate, setOpeningDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  // for adult children section
  const [toggle, setToggle] = useState(false);
  const [persons, setPersons] = useState({
    adult: 2,
    children: 0,
    room: 1,
  });
  const handleOption = (name, operation) => {
    setPersons((prevState) => {
      return {
        ...prevState,
        [name]: operation === "d" ? prevState[name] - 1 : prevState[name] + 1,
      };
    });
  };
  /*   const handleDecrease = (name) => {
    setPersons((prevState) => {
      return {
        ...prevState,
        [name]: prevState[name] >= 0 ? prevState[name] - 1 : prevState[name],
      };
    });
  }; */
  const handleDecrease = (name) => {
    setPersons((prevState) => {
      return {
        ...prevState,
        [name]: prevState[name] === 0 ? 0 : prevState[name] - 1,
      };
    });
  };
  const handleIncrease = (name) => {
    setPersons((prevState) => {
      return {
        ...prevState,
        [name]: prevState[name] + 1,
      };
    });
  };

  return (
    <div className="max-w-[1080px] mx-auto -mt-8">
      <div className="flex flex-col flex-wrap md:flex-row shadow-xl rounded bg-white">
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
          htmlFor="checkindate"
          className="relative block md:border-y-4 border-x-4 md:border-x-0 border-highlight"
        >
          <i className=" absolute left-3 top-4 text-stone-500">
            <BiCalendar />
          </i>
          <input
            id="checkindate"
            type="button"
            onClick={() => setOpeningDate(!openingDate)}
            value={`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}
            className="px-8 py-3 bg-white hover:cursor-pointer placeholder-highlight"
          />
          {openingDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              minDate={new Date()}
              className="absolute right-2 top-14"
            />
          )}
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
          <button
            className="px-8 py-3 bg-white flex gap-x-1"
            onClick={() => setToggle(!toggle)}
          >
            <span>{persons.adult} adults </span>{" "}
            <span className="leading-none font-bold">.</span>{" "}
            <span>{persons.children} children </span>
            <span className="leading-none font-bold">.</span>{" "}
            <span>{persons.room} room </span>
          </button>
          {/* div for selecting no of persons */}
          {toggle && (
            <div className="absolute bg-white shadow-xl">
              <div className="px-4 py-2">
                <span className="mr-[22px]">Adult:</span>
                <button
                  className="px-2  border-2 border-primary mx-2"
                  onClick={() => handleDecrease("adult")}
                >
                  -
                </button>
                <span>{persons.adult}</span>
                <button
                  className="px-2  border-2 border-primary mx-2"
                  onClick={() => handleIncrease("adult")}
                >
                  +
                </button>
              </div>
              <div className="px-4 py-2">
                <span>Children:</span>
                <button
                  className="px-2  border-2 border-primary mx-2"
                  onClick={() => handleDecrease("children")}
                >
                  -
                </button>
                <span>{persons.children}</span>
                <button
                  className="px-2  border-2 border-primary mx-2"
                  onClick={() => handleIncrease("children")}
                >
                  +
                </button>
              </div>
              <div className="px-4 py-2">
                <span className="mr-[18px]">Room:</span>
                <button
                  className="px-2  border-2 border-primary mx-2"
                  onClick={() => handleDecrease("room")}
                >
                  -
                </button>
                <span>{persons.room}</span>
                <button
                  className="px-2  border-2 border-primary mx-2"
                  onClick={() => handleIncrease("room")}
                >
                  +
                </button>
              </div>
            </div>
          )}
        </label>
        <div className="md:border-y-4 border-highlight border-r-4 bg-secondary">
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
      <div className="border-2 border-border px-4 py-3 mt-10 flex items-center">
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
