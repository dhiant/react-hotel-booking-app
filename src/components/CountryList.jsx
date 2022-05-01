import React from "react";

const CountryList = () => {
  const countries = [
    {
      name: "Isle of Wight",
      link: "https://www.booking.com/region/gb/isle-of-wight-county.en-gb.html?label=gen173nr-1DCAEoggI46AdIM1gEaKsBiAEBmAEJuAEXyAEM2AED6AEBiAIBqAIDuALbyrWTBsACAdICJGEzMTQxOWJiLTgzMGEtNGJkMS1hNTM1LWY4ZWY0ZDNmNWM3ZNgCBOACAQ&sid=610f6dda0c5bc7140145d2030ecf1d3a",
      properties: 934,
    },
    {
      name: "Jersey",
      link: "https://www.booking.com/region/gb/jersey.en-gb.html?label=gen173nr-1DCAEoggI46AdIM1gEaKsBiAEBmAEJuAEXyAEM2AED6AEBiAIBqAIDuALbyrWTBsACAdICJGEzMTQxOWJiLTgzMGEtNGJkMS1hNTM1LWY4ZWY0ZDNmNWM3ZNgCBOACAQ&sid=610f6dda0c5bc7140145d2030ecf1d3a",
      properties: 89,
    },
    {
      name: "Bora Bora",
      link: "https://www.booking.com/region/pf/bora-bora.en-gb.html?label=gen173nr-1DCAEoggI46AdIM1gEaKsBiAEBmAEJuAEXyAEM2AED6AEBiAIBqAIDuALbyrWTBsACAdICJGEzMTQxOWJiLTgzMGEtNGJkMS1hNTM1LWY4ZWY0ZDNmNWM3ZNgCBOACAQ&sid=610f6dda0c5bc7140145d2030ecf1d3a",
      properties: 59,
    },
    {
      name: "England",
      link: "https://www.booking.com/region/gb/england.en-gb.html?label=gen173nr-1DCAEoggI46AdIM1gEaKsBiAEBmAEJuAEXyAEM2AED6AEBiAIBqAIDuALbyrWTBsACAdICJGEzMTQxOWJiLTgzMGEtNGJkMS1hNTM1LWY4ZWY0ZDNmNWM3ZNgCBOACAQ&sid=610f6dda0c5bc7140145d2030ecf1d3a",
      properties: "73,969",
    },
    {
      name: "Texel",
      link: "https://www.booking.com/region/nl/texel.en-gb.html?label=gen173nr-1DCAEoggI46AdIM1gEaKsBiAEBmAEJuAEXyAEM2AED6AEBiAIBqAIDuALbyrWTBsACAdICJGEzMTQxOWJiLTgzMGEtNGJkMS1hNTM1LWY4ZWY0ZDNmNWM3ZNgCBOACAQ&sid=610f6dda0c5bc7140145d2030ecf1d3a",
      properties: 412,
    },
    {
      name: "Bihar",
      link: "https://www.booking.com/region/in/bihar-east.en-gb.html?label=gen173nr-1DCAEoggI46AdIM1gEaKsBiAEBmAEJuAEXyAEM2AED6AEBiAIBqAIDuALbyrWTBsACAdICJGEzMTQxOWJiLTgzMGEtNGJkMS1hNTM1LWY4ZWY0ZDNmNWM3ZNgCBOACAQ&sid=610f6dda0c5bc7140145d2030ecf1d3a",
      properties: 761,
    },
    {
      name: "Bali",
      link: "https://www.booking.com/region/id/bali.en-gb.html?label=gen173nr-1DCAEoggI46AdIM1gEaKsBiAEBmAEJuAEXyAEM2AED6AEBiAIBqAIDuALbyrWTBsACAdICJGEzMTQxOWJiLTgzMGEtNGJkMS1hNTM1LWY4ZWY0ZDNmNWM3ZNgCBOACAQ&sid=610f6dda0c5bc7140145d2030ecf1d3a",
      properties: "12,679",
    },
    {
      name: "Guernesy",
      link: "https://www.booking.com/region/gb/guernsey.en-gb.html?label=gen173nr-1DCAEoggI46AdIM1gEaKsBiAEBmAEJuAEXyAEM2AED6AEBiAIBqAIDuALbyrWTBsACAdICJGEzMTQxOWJiLTgzMGEtNGJkMS1hNTM1LWY4ZWY0ZDNmNWM3ZNgCBOACAQ&sid=610f6dda0c5bc7140145d2030ecf1d3a",
      properties: 61,
    },
    {
      name: "Santorini",
      link: "https://www.booking.com/region/gr/santorini.en-gb.html?label=gen173nr-1DCAEoggI46AdIM1gEaKsBiAEBmAEJuAEXyAEM2AED6AEBiAIBqAIDuALbyrWTBsACAdICJGEzMTQxOWJiLTgzMGEtNGJkMS1hNTM1LWY4ZWY0ZDNmNWM3ZNgCBOACAQ&sid=610f6dda0c5bc7140145d2030ecf1d3a",
      properties: "17,62",
    },
    {
      name: "Hawaii",
      link: "https://www.booking.com/region/us/hawaii.en-gb.html?label=gen173nr-1DCAEoggI46AdIM1gEaKsBiAEBmAEJuAEXyAEM2AED6AEBiAIBqAIDuALbyrWTBsACAdICJGEzMTQxOWJiLTgzMGEtNGJkMS1hNTM1LWY4ZWY0ZDNmNWM3ZNgCBOACAQ&sid=610f6dda0c5bc7140145d2030ecf1d3a",
      properties: "5,515",
    },
    {
      name: "Ras AI Khaimah",
      link: "https://www.booking.com/region/ae/ras-al-khaimah.en-gb.html?label=gen173nr-1DCAEoggI46AdIM1gEaKsBiAEBmAEJuAEXyAEM2AED6AEBiAIBqAIDuALbyrWTBsACAdICJGEzMTQxOWJiLTgzMGEtNGJkMS1hNTM1LWY4ZWY0ZDNmNWM3ZNgCBOACAQ&sid=610f6dda0c5bc7140145d2030ecf1d3a",
      properties: 113,
    },
    {
      name: "Cornwall",
      link: "https://www.booking.com/region/gb/cornwall-county.en-gb.html?label=gen173nr-1DCAEoggI46AdIM1gEaKsBiAEBmAEJuAEXyAEM2AED6AEBiAIBqAIDuALbyrWTBsACAdICJGEzMTQxOWJiLTgzMGEtNGJkMS1hNTM1LWY4ZWY0ZDNmNWM3ZNgCBOACAQ&sid=610f6dda0c5bc7140145d2030ecf1d3a",
      properties: "5,275",
    },
    {
      name: "Ibiza",
      link: "https://www.booking.com/region/es/ibiza.en-gb.html?label=gen173nr-1DCAEoggI46AdIM1gEaKsBiAEBmAEJuAEXyAEM2AED6AEBiAIBqAIDuALbyrWTBsACAdICJGEzMTQxOWJiLTgzMGEtNGJkMS1hNTM1LWY4ZWY0ZDNmNWM3ZNgCBOACAQ&sid=610f6dda0c5bc7140145d2030ecf1d3a",
      properties: "1,640",
    },
    {
      name: "Tenerife",
      link: "https://www.booking.com/region/es/tenerife-island.en-gb.html?label=gen173nr-1DCAEoggI46AdIM1gEaKsBiAEBmAEJuAEXyAEM2AED6AEBiAIBqAIDuALbyrWTBsACAdICJGEzMTQxOWJiLTgzMGEtNGJkMS1hNTM1LWY4ZWY0ZDNmNWM3ZNgCBOACAQ&sid=610f6dda0c5bc7140145d2030ecf1d3a",
      properties: "9,601",
    },
    {
      name: "Uttar Pradesh",
      link: "https://www.booking.com/region/in/uttar-pradesh.en-gb.html?label=gen173nr-1DCAEoggI46AdIM1gEaKsBiAEBmAEJuAEXyAEM2AED6AEBiAIBqAIDuALbyrWTBsACAdICJGEzMTQxOWJiLTgzMGEtNGJkMS1hNTM1LWY4ZWY0ZDNmNWM3ZNgCBOACAQ&sid=610f6dda0c5bc7140145d2030ecf1d3a",
      properties: "4,372",
    },
    {
      name: "Phuket Province",
      link: "https://www.booking.com/region/th/phuket.en-gb.html?label=gen173nr-1DCAEoggI46AdIM1gEaKsBiAEBmAEJuAEXyAEM2AED6AEBiAIBqAIDuALbyrWTBsACAdICJGEzMTQxOWJiLTgzMGEtNGJkMS1hNTM1LWY4ZWY0ZDNmNWM3ZNgCBOACAQ&sid=610f6dda0c5bc7140145d2030ecf1d3a",
      properties: "5,479",
    },
    {
      name: "Lake District",
      link: "https://www.booking.com/region/gb/lake-district.en-gb.html?label=gen173nr-1DCAEoggI46AdIM1gEaKsBiAEBmAEJuAEXyAEM2AED6AEBiAIBqAIDuALbyrWTBsACAdICJGEzMTQxOWJiLTgzMGEtNGJkMS1hNTM1LWY4ZWY0ZDNmNWM3ZNgCBOACAQ&sid=610f6dda0c5bc7140145d2030ecf1d3a",
      properties: "2,404",
    },
    {
      name: "Mykonos",
      link: "https://www.booking.com/region/gr/mykonos.en-gb.html?label=gen173nr-1DCAEoggI46AdIM1gEaKsBiAEBmAEJuAEXyAEM2AED6AEBiAIBqAIDuALbyrWTBsACAdICJGEzMTQxOWJiLTgzMGEtNGJkMS1hNTM1LWY4ZWY0ZDNmNWM3ZNgCBOACAQ&sid=610f6dda0c5bc7140145d2030ecf1d3a",
      properties: "1,452",
    },
    {
      name: "Zanzibar",
      link: "https://www.booking.com/region/tz/zanzibar.en-gb.html?label=gen173nr-1DCAEoggI46AdIM1gEaKsBiAEBmAEJuAEXyAEM2AED6AEBiAIBqAIDuALbyrWTBsACAdICJGEzMTQxOWJiLTgzMGEtNGJkMS1hNTM1LWY4ZWY0ZDNmNWM3ZNgCBOACAQ&sid=610f6dda0c5bc7140145d2030ecf1d3a",
      properties: "835",
    },
  ];
  return (
    <div className="max-w-[1080px] mx-auto px-4 lg:px-0">
      <h1 className="text-xl md:text-2xl font-bold mt-6">
        Destinations we love
      </h1>
      <div className="mt-4 flex items-center">
        <button className="bg-[#F0F7FC] border-2 border-secondary  rounded-[999px] inline-flex justify-center items-center px-3.5 py-3">
          <span className="ml-2 text-sm font-medium text-secondary">
            Regions
          </span>
        </button>
        <button className="ml-2 hover:bg-[#F0F0F0] active:bg-[#F0F7FC] active:border-2 active:border-secondary  rounded-full inline-flex justify-center items-center px-3.5 py-3">
          <span className="ml-2 text-sm font-medium text-secondary">
            Cities
          </span>
        </button>
        <button className="hover:bg-[#F0F0F0] active:bg-[#F0F7FC] active:border-2 active:border-secondary  rounded-full inline-flex justify-center items-center px-2.5 sm:px-3.5 py-3">
          <span className="ml-2 text-sm font-medium text-secondary">
            Places of interest
          </span>
        </button>
      </div>
      <div>
        <div className="mt-4">
          <ul className=" justify-between gap-y-4 flex-wrap countriesList">
            {countries.map((item, index) => (
              <li
                key={index}
                className="text-xs sm:text-sm font-medium w-[33.33%] sm:w-[20%] inline-block mb-4"
              >
                <a href={`${item.link}`} className="hover:underline">
                  {item.name}
                </a>
                <p className="text-xs sm:text-sm text-textLight">
                  {item.properties} properties
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountryList;
