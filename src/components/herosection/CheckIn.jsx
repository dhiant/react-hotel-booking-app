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
// usenavigate to navigate into hotels page
import { useNavigate } from "react-router-dom";
import DestinationsName from "./DestinationsName";

const CheckIn = () => {
  // show or hide search destinations div
  const [displayDestination, setDisplayDestination] = useState("hidden");
  const [destination, setDestination] = useState("");

  // to hide and show the date calendar
  const [openingDate, setOpeningDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  // to select no of persons
  const [toggle, setToggle] = useState(false);
  const [persons, setPersons] = useState({
    adult: 2,
    children: 0,
    room: 1,
  });
  // to show warning message when destination name is empty
  const [showWarning, setShowWarning] = useState(false);
  // to decremet the counter
  const handleDecrease = (name) => {
    setPersons((prevState) => {
      return {
        ...prevState,
        [name]: prevState[name] === 0 ? 0 : prevState[name] - 1,
      };
    });
  };
  // to increment the counter
  const handleIncrease = (name) => {
    setPersons((prevState) => {
      return {
        ...prevState,
        [name]: prevState[name] + 1,
      };
    });
  };
  // to navigate into hotels page
  const navigate = useNavigate();
  const handleSearch = () => {
    if (destination === "") {
      setShowWarning(true);
    } else {
      navigate("/hotels", { state: { destination, date, persons } });
    }
    // navigate("/hotels", { state: { destination, date, persons } });
  };

  return (
    <div className="max-w-[1080px] mx-auto -mt-8">
      <div className="flex flex-col flex-wrap md:flex-row shadow-xl rounded bg-white">
        {/* search destinations */}
        <label
          htmlFor="place"
          className="relative grow  block border-4 border-highlight"
        >
          <i className=" absolute left-3 top-4 text-stone-500">
            <MdOutlineBed />
          </i>

          <input
            id="place"
            type="search"
            placeholder="Where are you going?"
            className="px-8 py-3 w-full "
            onChange={(e) => setDestination(e.target.value)}
            value={destination}
            onFocus={() => setDisplayDestination("block")}
            onBlur={() => setDisplayDestination("hidden")}
          />
          {showWarning && (
            <>
              <div className="bg-red-700 text-white text-xs p-1 absolute top-10">
                Please enter a destination to start searching
              </div>
            </>
          )}
          {/*search destinations div */}
          <div
            className={` ${displayDestination} w-72 py-2 z-10 absolute bg-white top-14`}
          >
            <h1 className="text-sm font-normal mb-3 pl-3">
              Popular nearby destinations
            </h1>
            {["Pokhara", "Kathmandu", "Nagarkot", "Sauraha", "Chitwan"].map(
              (location, index) => (
                <DestinationsName
                  key={index}
                  location={location}
                  setDestination={setDestination}
                />
              )
            )}
          </div>
        </label>
        {/* Check in Check out date */}
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
              className="absolute right-2 top-14 z-10"
            />
          )}
        </label>
        {/* Select no of persons children rooms */}
        <label
          htmlFor="persons"
          className="relative block border-4 border-highlight"
        >
          <i className=" absolute left-3 top-4 text-stone-500">
            <BsPerson />
          </i>
          <i className=" absolute right-3 top-2 text-stone-500">
            <MdKeyboardArrowUp className="mt-1" />
            <MdKeyboardArrowDown className="-mt-2" />
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
            <div className="absolute top-14 bg-white shadow-xl px-6 py-3 w-72 z-10 ">
              <div className="py-2">
                <span className="mr-[22px]">Adults:</span>
                <button
                  className="px-2  border-2 border-primary mx-2 shadow-md"
                  onClick={() => handleDecrease("adult")}
                >
                  -
                </button>
                <span className="px-2">{persons.adult}</span>
                <button
                  className="px-2  border-2 border-primary mx-2 shadow-md"
                  onClick={() => handleIncrease("adult")}
                >
                  +
                </button>
              </div>
              <div className="py-2">
                <span className="mr-[7px]">Children:</span>
                <button
                  className="px-2  border-2 border-primary mx-2 shadow-md"
                  onClick={() => handleDecrease("children")}
                >
                  -
                </button>
                <span className="px-2">{persons.children}</span>
                <button
                  className="px-2  border-2 border-primary mx-2 shadow-md"
                  onClick={() => handleIncrease("children")}
                >
                  +
                </button>
              </div>
              {/* to show & hide age needed div */}
              {persons.children > 0 && (
                <div>
                  <div className="">
                    {[...Array(persons.children)].map((val, index) => (
                      <select
                        key={index}
                        id="childAges"
                        name="childAges"
                        className="border-2 border-red-600 px-1 py-1 text-sm text-primary mb-1 mr-2"
                      >
                        <option value="null" className="text-black">
                          Age needed
                        </option>

                        {[...Array(18)].map((val, index) => (
                          <option
                            key={index}
                            value={index}
                            className="text-black"
                          >
                            {index} years old
                          </option>
                        ))}
                      </select>
                    ))}
                  </div>
                  <p className="text-sm text-textLight p-1">
                    To find you a place to stay that fits your entire group
                    along with correct prices, we need to know how old your
                    children will be at check-out
                  </p>
                </div>
              )}
              {/* for selecting no of rooms */}
              <div className="py-2">
                <span className="mr-[18px]">Rooms:</span>
                <button
                  className="px-2  border-2 border-primary mx-2 shadow-md"
                  onClick={() => handleDecrease("room")}
                >
                  -
                </button>
                <span className="px-2">{persons.room}</span>
                <button
                  className="px-2  border-2 border-primary mx-2 shadow-md"
                  onClick={() => handleIncrease("room")}
                >
                  +
                </button>
              </div>
            </div>
          )}
        </label>
        {/* Search button in checkin */}
        <div className="md:border-y-4 border-highlight border-r-4 bg-secondary">
          <Button text="Search" handleSearch={handleSearch} padding="p-4" />
        </div>
      </div>
      {/* checkbox */}
      <label htmlFor="traveling_work" className="flex items-center mt-4 ">
        <input
          type="checkbox"
          name=""
          id="traveling_work"
          className="w-5 h-5"
        />
        <span className="px-4">I'm traveling for work</span>
      </label>
      {/* learn more */}
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
