import React from "react";
import { BsQuestionCircle } from "react-icons/bs";
import { useState } from "react";

const Header = () => {
  // let displayCurrency = "hidden";
  // let displayLanguage = "hidden";
  // to show or hide hover effect on buttons
  const [displayCurrency, setDisplayCurrency] = useState("hidden");
  const [displayLanguage, setDisplayLanguage] = useState("hidden");
  const [displayCustomerService, setDisplayCustomerService] =
    useState("hidden");
  const handleCurrencyShow = () => setDisplayCurrency("block");
  const handleCurrencyHide = () => setDisplayCurrency("hidden");

  const handleLanguageShow = () => setDisplayLanguage("block");
  const handleLanguageHide = () => setDisplayLanguage("hidden");

  const handleCustomerServiceShow = () => setDisplayCustomerService("block");
  const handleCustomerServiceHide = () => setDisplayCustomerService("hidden");

  return (
    <header className="bg-primary text-white w-full md:max-w-[1080px] mx-auto">
      <div className=" flex flex-wrap items-center text-white justify-between py-2">
        <div>
          <h2 className="text-2xl font-bold text-white">Booking.com</h2>
        </div>
        <div className="flex gap-x-4 md:gap-x-6 flex-wrap items-center text-base relative">
          {/* NPR Button */}
          <button
            className="font-bold p-4 hover:bg-primaryLight"
            onMouseEnter={() => handleCurrencyShow()}
            onMouseLeave={() => handleCurrencyHide()}
          >
            NPR
          </button>
          {/* Hover effect for NPR */}
          <div
            className={`${displayCurrency} bg-black text-white absolute top-16 left-1 md:-left-10`}
          >
            <div className="w-4 h"></div>
            <h1 className="p-1 text-sm">Choose your currency</h1>
          </div>
          {/* Flag Button */}
          <button
            className="hover:bg-primaryLight p-4"
            onMouseEnter={() => handleLanguageShow()}
            onMouseLeave={() => handleLanguageHide()}
          >
            <img
              src="https://cf.bstatic.com/static/img/flags/new/48-squared/us/fa2b2a0e643c840152ba856a8bb081c7ded40efa.png"
              alt="USA flag"
              className="rounded-full w-6 h-6 "
            />
          </button>
          {/* Hover effect for flag */}
          <div
            className={`${displayLanguage} bg-black text-white absolute top-16 left-10`}
          >
            <div className="w-4 h"></div>
            <h1 className="p-1 text-sm">Choose your language</h1>
          </div>
          <a
            href="https://secure.booking.com/help.en-gb.html?label=gen173nr-1FCAEoggI46AdIM1gEaKsBiAEBmAEJuAEXyAEM2AEB6AEB-AELiAIBqAIDuAKXnr6TBsACAdICJDViMTRlNjRjLTU4MzktNDRmMC05ZWFkLTgyZDA3YzYwZWE2ZdgCBuACAQ&sid=74660c001dd0d4c55c1b7bcd0a8b7ca5#/"
            alt="contact customer service"
          >
            <button
              className="hover:bg-primaryLight p-4"
              onMouseEnter={() => handleCustomerServiceShow()}
              onMouseLeave={() => handleCustomerServiceHide()}
            >
              <BsQuestionCircle className="w-6 h-8 " />
            </button>
          </a>
          <div
            className={`${displayCustomerService} bg-black text-white absolute top-16 left-28`}
          >
            <div className="w-4 h"></div>
            <h1 className="p-1 text-sm">Contact Customer Service</h1>
          </div>
          <a
            href="https://join.booking.com/?lang=en-gb&utm_source=topbar&utm_medium=frontend&amp;label=gen173nr-1FCAEoggI46AdIM1gEaKsBiAEBmAEJuAEXyAEM2AEB6AEB-AELiAIBqAIDuAKXnr6TBsACAdICJDViMTRlNjRjLTU4MzktNDRmMC05ZWFkLTgyZDA3YzYwZWE2ZdgCBuACAQ&amp;aid=304142"
            alt="list your property"
          >
            <button className=" border-white hover:bg-primaryLight border-2 px-4 py-2 font-medium text-sm leading-none">
              List your Property
            </button>
          </a>
          <a
            href="https://account.booking.com/register?op_token=EgVvYXV0aCKXBQoUdk8xS2Jsazd4WDl0VW4yY3BaTFMSCWF1dGhvcml6ZRo1aHR0cHM6Ly9zZWN1cmUuYm9va2luZy5jb20vbG9naW4uaHRtbD9vcD1vYXV0aF9yZXR1cm4qtgRVcVVEY2JJYUxKMFdfN0tLS1J3NHdYVEUwZmhDaUJHRVRUZVN0X1czUGpmTmM3UDRhbDFrSWI4S1lTLVpxbFd4blJQUFVRLVlNMUNsaEVMTlo3NE5tV05fZFotcHFqTXRRazlqT3hLU0ZYcVhHc1FLelg0ZVV4TmdrZGhYM0xDTHM1WmJ4QU15ek5pR3JHb1ptXzg0RTJHdTJLb0dOamhaM0IzU0NtUkJueHJmM05aWC1TeUU0R0dhSVR1cUpsczJHMjl2c21xb1REQk52MEgyZFpLeWdkcVBmU2hwdk50LS1yR0Qwb0I0X2U3SGVDWUtyMDJMWWNoYUM5Mlo0b1R3bERkbERDbHVYNm9aMmJDeDVLNThJYURKSk84NU1fck5tdWZIa1ZDT3MxaGpQNlVpbTk1VTRsdVg1bXd3cVRvZm9TUGlKeWZyWlpNX29fQ1JiejVYNXlTekhHWTBrUTFzNGV4Tm1VeHNJSjFFQ01QWlBDTEVVSUpub1FpQ1RVNFFzVEMzN3hNbldIRXhQMGMydGM5NmFkbFd6Wlk2Sk9HamhXY3BYbHpQR3d6bGdmUzVSSHNvdXJDcmtfZDgxVHAwVnJ2bkJBV3JkQW5TZmpYbDJnMEZ4b3NCQ2JZYmRFZC10MmFka1l6OXZRRmlSdmNjZ21scndMN3JPNzZvTVlSZzMwaUNGdUVvQXN5ZWxOZHNadHFsR1phdFY0dGlMalRBWXJrZTBRSGloakczQnpqLWdKVkp4Z0IEY29kZSoWCI7IEjCGwfTWysYlOgBCAFiyjcCTBg"
            alt="register"
          >
            <button className="bg-white hover:bg-opacity-90 text-primaryLight px-4 py-2 leading-none text-sm font-medium">
              Register
            </button>
          </a>
          <a
            href="https://account.booking.com/sign-in?op_token=EgVvYXV0aCKXBQoUdk8xS2Jsazd4WDl0VW4yY3BaTFMSCWF1dGhvcml6ZRo1aHR0cHM6Ly9zZWN1cmUuYm9va2luZy5jb20vbG9naW4uaHRtbD9vcD1vYXV0aF9yZXR1cm4qtgRVcVVEY2JJYUxKMFdfN0xfa2t5VDI0bWR3Smk5dGpRVjZQbEtrdDlkNkQtbEl4N3R6ai1fWl9DZ2VPYkx2SnlQZEVRaGV5NlRqSFQtWkdwcU45V2pZcDZNZ01JdGdCd3QtT1pRUDZBdW9QWmVVQklrQWF1WmlTckFDN19QQlJjOU15em91TmxXd1NMeWwwTjBSYW5scXZTcllHZFd1bGhWNk1EOWhTWkdHWlRpYmltajRBbTFPb3J6N0ZoVllYVWdqQTNoenFFbDd6cTV6REt3dXNNOGFKcnFJTDhFQkVuRDBhWkNIcy1qVnRCU2dnaDdqNFBLbndQVWVCbDNiMXNiWmM0WDZEaFNBMWJpZ211Z21GQVowVF9JZ1VqYW1zNl92S1l1cGQ5MUtXWm1JaUV6QkxHSU1NeFJQZXNURkhJVkVSWUNHOVZJZUt5dnhsRDdDR09DQnhMcmh1em9ndW16SWxJUGxSSFVyNjhURm5nTXpZNkY4clJGeGxLWENNcW0yZXhQdDBPM3hGM3FNTzhobHVxaG9nQU4zU0VBUlRpTFVCaHU3dkFSSEpmNzhRcWtVODMyTkpEcUxYejBPUmFWNzJrbWxYTU1hWEhzUEtjdzh3WDVmai1ubktxVnZrdWdYcEdqVGFnTTg5RFpubDdrdTFMWEZ0am4zQ2lxNWU1U0hxUGdlSWFPTmpFSExYdHRKdXZfQzdfNXIxM3pWY3JvazBJOVVaZ1NpMk5zMm1UWUMyeW5yZ0IEY29kZSoWCI7IEjC61oni0MYlOgBCAFjwjcCTBg"
            alt="sign in"
          >
            <button className="bg-white hover:bg-opacity-90 text-primaryLight px-4 py-2 leading-none text-sm font-medium">
              Sign in
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
