import React from "react";
import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
import Button from "./common/Button";
import { Calendar } from "react-date-range";
import * as locales from "react-date-range/dist/locale";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import ReactTooltip from "react-tooltip";

const Form = () => {
  // show and hide calendar
  const [checkInDisplay, setCheckInDisplay] = useState(false);
  const [checkOutDisplay, setCheckOutDisplay] = useState(false);
  // react calendar
  const [locale, setLocale] = React.useState("enUS");

  const location = useLocation();
  const [checkInDate, setCheckInDate] = useState(
    location.state ? location.state.date[0].startDate : new Date()
  );
  const [checkOutDate, setCheckOutDate] = useState(
    location.state ? location.state.date[0].endDate : new Date()
  );
  // data from home page
  const [destination, setDestination] = useState(
    location.state ? location.state.destination : ""
  );
  // const [date, setDate] = useState(location.state.date);
  // const [endDate,endDate]=useState(location.start.date[0].endDate)
  const [persons, setPersons] = useState(
    location.state
      ? location.state.persons
      : {
          adult: 2,
          children: 0,
          room: 1,
        }
  );
  const [toggle, setToggle] = useState(false);
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

  // react calendar
  const nameMapper = {
    enUS: "English (United States)",
    es: "Spanish",
    hi: "Hindi",
    pt: "Portuguese",
    ro: "Romanian",
    ru: "Russian",
    uk: "Ukrainian",
    vi: "Vietnamese",
    zhCN: "Chinese Simplified",
  };
  const localeOptions = Object.keys(locales)
    .map((key) => ({
      value: key,
      label: `${key} - ${nameMapper[key] || ""}`,
    }))
    .filter((item) => nameMapper[item.value]);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="bg-highlight px-4 py-3 lg:ml-10 max-w-[280px] rounded-sm hidden lg:block">
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
            value={`${format(checkInDate, "EEEE MMMM dd yyyy")}`}
            className="bg-white py-1 rounded-sm w-full hover:cursor-pointer"
            onClick={() => {
              setCheckInDisplay(!checkInDisplay);
            }}
          />
        </div>
        {/* select check in date */}
        {checkInDisplay && (
          <div style={{ display: "flex", flexFlow: "column nowrap" }}>
            <select
              style={{ margin: "20px auto" }}
              onChange={(e) => setLocale(e.target.value)}
              value={locale}
            >
              {localeOptions.map((option, i) => (
                <option value={option.value} key={i}>
                  {option.label}
                </option>
              ))}
            </select>
            <Calendar
              onChange={(item) => {
                console.log("Item is", item);
                setCheckInDate(item);
              }}
              locale={locales[locale]}
              date={checkInDate}
              className="z-10 absolute"
            />
          </div>
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
            value={`${format(checkOutDate, "EEEE MMMM dd yyyy")}`}
            className="bg-white py-1 rounded-sm w-full hover:cursor-pointer"
            onClick={() => setCheckOutDisplay(!checkOutDisplay)}
          />
        </div>
        {/* select check out date */}
        {checkOutDisplay && (
          <div style={{ display: "flex", flexFlow: "column nowrap" }}>
            <select
              style={{ margin: "20px auto" }}
              onChange={(e) => setLocale(e.target.value)}
              value={locale}
            >
              {localeOptions.map((option, i) => (
                <option value={option.value} key={i}>
                  {option.label}
                </option>
              ))}
            </select>
            <Calendar
              onChange={(item) => setCheckOutDate(item)}
              locale={locales[locale]}
              date={checkOutDate}
              className="z-10 absolute"
            />
          </div>
        )}
        {/* select persons children rooms */}
        <div className="">
          <label htmlFor="" className="text-sm relative">
            8-nights stay
          </label>
          <br />
          <button
            className="bg-white pl-4 py-1 flex lg:gap-x-1 w-full rounded-sm"
            onClick={() => setToggle(!toggle)}
          >
            <span>{persons.adult} adults </span>
            <span className="leading-none font-bold">.</span>{" "}
            <span>{persons.children} children </span>
            <span className="leading-none font-bold">.</span>{" "}
            <span>{persons.room} room</span>
          </button>
        </div>
        {/* select no of persons children and room */}
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
                  To find you a place to stay that fits your entire group along
                  with correct prices, we need to know how old your children
                  will be at check-out
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
