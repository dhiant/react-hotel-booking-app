import React from "react";
import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
import Button from "./reusable/Button";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import ReactTooltip from "react-tooltip";

const Form = () => {
  const [checkInDisplay, setCheckInDisplay] = useState(false);
  const [checkInDate, setCheckInDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const [checkOutDisplay, setCheckOutDisplay] = useState(false);
  const [checkOutDate, setcheckOutDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [persons, setPersons] = useState(location.state.persons);

  return (
    <form action="">
      <div className="bg-highlight px-4 py-3 lg:ml-10 max-w-[280px] rounded-sm">
        <h1 className="text-xl font-medium">Search</h1>
        {/* destination name */}
        <div className="relative">
          <label htmlFor="destination" className="text-sm">
            Destination/property name
          </label>
          <br />
          <i>
            <GoSearch className="absolute top-8 left-2 w-5 h-5" />
          </i>
          <input
            type="text"
            name="destination"
            id="destination"
            placeholder=""
            className="py-1 pl-10 rounded-sm w-full"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        {/* check in date */}
        <div className="relative">
          <label htmlFor="" className="text-sm">
            Check-in date
          </label>
          <br />
          <i>
            <BsFillCalendarDateFill className="absolute top-8 left-2" />
          </i>
          <input
            type="button"
            value={`${format(date[0].startDate, "EEEE dd MMMM yyyy")}`}
            className="bg-white py-1 rounded-sm w-full hover:cursor-pointer"
            onClick={() => {
              setCheckInDisplay(!checkInDisplay);
            }}
          />
        </div>
        {/* select check in date */}
        {checkInDisplay && (
          <DateRangePicker
            onChange={(item) => setCheckInDate([item.selection])}
            showSelectionPreview={false}
            moveRangeOnFirstSelection={false}
            months={1}
            ranges={checkInDate}
            direction="horizontal"
          />
        )}
        {/* check out date */}
        <div className="relative">
          <label htmlFor="" className="text-sm">
            Check-out date
          </label>
          <br />
          <i>
            <BsFillCalendarDateFill className="absolute top-8 left-2 " />
          </i>
          <input
            type="button"
            value={`${format(date[0].endDate, "EEEE dd  MMMM yyyy")}`}
            className="bg-white py-1 rounded-sm w-full hover:cursor-pointer"
            onClick={() => setCheckOutDisplay(!checkOutDisplay)}
          />
        </div>
        {/* select check out date */}
        {checkOutDisplay && (
          <DateRangePicker
            onChange={(item) => setcheckOutDate([item.selection])}
            showSelectionPreview={false}
            moveRangeOnFirstSelection={false}
            months={1}
            ranges={checkOutDate}
            direction="horizontal"
          />
        )}
        {/* select persons children rooms */}
        <div className="">
          <label htmlFor="" className="text-sm">
            8-night stay
          </label>
          <br />
          <button className="bg-white pl-4 py-1 flex lg:gap-x-1 w-full rounded-sm">
            <span>{persons.adult} adults </span>
            <span className="leading-none font-bold">.</span>{" "}
            <span>{persons.children} children </span>
            <span className="leading-none font-bold">.</span>{" "}
            <span>{persons.room} room</span>
          </button>
        </div>
        {/* homes and apartments */}
        <div className="relative flex items-center mt-2">
          <input
            type="checkbox"
            name="homes_apartments"
            id="homes_apartments"
          />
          <label htmlFor="homes_apartments" className="pl-3 text-sm">
            Entire homes & apartments
          </label>
          <span
            data-tip="We'll show you stays where you can have the entire place to yourself"
            className="absolute top-[3px] right-1"
          >
            <i>
              <BsQuestionCircle />
            </i>
            <ReactTooltip place="bottom" type="dark" effect="solid" />
          </span>
        </div>
        {/* travelling work */}
        <div className="relative flex items-center mt-1">
          <input type="checkbox" name="travelling_work" id="travelling_work" />
          <label htmlFor="travelling_work" className="pl-3 text-sm">
            I'm traveling for work
          </label>
          <span
            data-tip="If you select this option, we'll show you popular business travel features like breakfast, WiFi and free parking."
            className="absolute top-[3px] right-1"
          >
            <i>
              <BsQuestionCircle />
            </i>
            <ReactTooltip place="bottom" type="dark" effect="solid" />
          </span>
        </div>
        <div className="mt-4">
          <Button text="Search" padding="px-[5.5rem] py-4" />
        </div>
      </div>
    </form>
  );
};

export default Form;
