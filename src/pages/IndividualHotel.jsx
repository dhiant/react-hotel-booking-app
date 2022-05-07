import React from "react";
import "./IndividualHotel.css";
import Header from "../components/herosection/Header";
import Navbar from "../components/herosection/Navbar";
import Form from "../components/Form";
import Button from "../components/reusable/Button";
import MailList from "../components/MailList";
import Footer from "../components/footer/Footer";
import { AiFillLike } from "react-icons/ai";
import { BsSuitHeartFill, BsWifi } from "react-icons/bs";
import { FaParking, FaShuttleVan, FaSmokingBan } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { IoIosStar, IoMdWine } from "react-icons/io";
import { IoBedOutline } from "react-icons/io5";
import { MdRoomService } from "react-icons/md";

const IndividualHotel = () => {
  const images = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/160587622.jpg?k=347c06aad1e370c8613f9681ceb96bd76043fad63ed3ad8db6ef52484afa873b&o=&hp=1",
      alt: "a man sitting at a counter in a bar at Hotel Buddha in Kathmandu",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/80954498.jpg?k=7b053f159c2196c9db49d70cfd3e43bbe823865f681ad7a5a291cbdad06a0186&o=&hp=1",
      alt: "a hotel with two beds",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/80954502.jpg?k=c71124e7bbe40df804cacba61b97f32751516d1d6a1aa57e37ca3add9248a39f&o=&hp=1",
      alt: "a bathroom with a sink, toilet, and bathtub at Hotel Buddha in Kathmandu",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max300/80954499.jpg?k=281e430a90aaae6e97867fbd14374909a585afb1d2d212a5cedd05ce7af0a11b&o=&hp=1",
      alt: "a bedroom with a bed and a dresser at Hotel Buddha in Kathmandu",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max300/160587607.jpg?k=1a66baf9f75bb1944c272139d700e6b10e2a46b90363d5f6d7aa4441a1d07bd2&o=&hp=1",
      alt: "a restaurant with tables, chairs and umbrellas at Hotel Buddha in Kathmandu",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max300/160587590.jpg?k=26a93ba609779a2851eeee1c509c05ad15380216b8b827e551ca461d4b638c9b&o=&hp=1",
      alt: "an outdoor dining area with tables and chairs at Hotel Buddha in Kathmandu",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max300/82243682.jpg?k=eff9a79112e15fffd1c328b8e4f951118daa63ac47cd8efe4716103d158f38a2&o=&hp=1",
      alt: "a room with a painting on the wall and a painting on the floor at Hotel Buddha in Kathmandu",
    },
  ];
  return (
    <div>
      {/* Navbar & Header */}
      <div className="bg-primary pb-5">
        <Header />
        <Navbar />
      </div>
      {/* form and grid */}
      <div className="w-full md:max-w-[1080px] mx-auto flex items-start gap-x-10 mt-8">
        <Form />
        {/* grid */}
        <div>
          {/* title and star ratings */}
          <div className="md:flex">
            <h1 className="text-2xl font-bold">Hotel Buddha</h1>
            <span className="flex items-center px-2">
              <IoIosStar className="w-5 h-5 fill-highlight" />
              <IoIosStar className="w-5 h-5 fill-highlight" />
              <IoIosStar className="w-5 h-5 fill-highlight" />
              <AiFillLike className="w-5 h-5 fill-highlight" />
            </span>
          </div>
          {/* grid images */}
          <div className="gridContainer mt-3">
            {images.map((image, index) => (
              <img
                key={index}
                src={`${image.src}`}
                alt={`${image.alt}`}
                className="w-full object-cover h-full"
              />
            ))}
          </div>
        </div>
      </div>
      {/* hotel details */}
      <div className="w-full md:max-w-[1080px] mx-auto mt-4 ">
        <div className="md:flex gap-x-10">
          {/* paragraph content */}
          <div className="md:w-[800px]">
            <h1 className="text-2xl font-semibold">
              Stay in the heart of Kathmandu -{" "}
              <span className="text-sm font-bold text-secondary">
                Excellent location - show map
              </span>
            </h1>
            {/* paragraph text */}
            <div className="text-text">
              <p className="text-sm mt-3">
                You're eligible for a Genius discount at Hotel Buddha! To save
                at this property, all you have to do is{" "}
                <a
                  href="https://account.booking.com/sign-in?op_token=EgVvYXV0aCLoCQoUdk8xS2Jsazd4WDl0VW4yY3BaTFMSCWF1dGhvcml6ZRo1aHR0cHM6Ly9zZWN1cmUuYm9va2luZy5jb20vbG9naW4uaHRtbD9vcD1vYXV0aF9yZXR1cm4qhwlVdUlHTWZPZGRkTS1fOFRwaUQ3eXJnX1daV09jV1pwZWUzQXRCQmpNSkJiQjB4ckdxaUNaTExKYzV0RnZUbGpRdHBvYXdTV0ZsUGF0WlBwUFBISTBQQUUxdUJsSnREOHNQZmhnVkVMNE1pY1FYaUZSOFpCMllSSk9xb001QkMzNDhaT2pncjV3ZmtqaHNIQzJhU0x1cXYtQkw3MDBTcDZPaXhTYVVUNnU4cWh3aE9JLW1iSHhNendnT0pvdkZtV2ZQaVFGR3dNNzZ1dy1xSllqS2g3am9KOFhSOV9WN0p1cnZuU1ZDWjZiX2RqblV0N3pNZENqYVUwMUd4b0lxREd0QURTS2EtSVNUMTIxV2JjOWc2Vm1TdVFFSjFpeHY2eVRvd0V3QUtGQWF2WEZHM0NrdXN3anVBbkFjV3dYV3FRRExkUHJicXJkUndwcGl5UzNXOFdONXRWbGU3RlZoYUFVM1NSeHFqM0xtUl9ZZ19nd0djSXpJV3RQYWxkT09rX3lOenZJSEdZLXEzWWpGa1AteFFOZ1pNb2JrQW9fdDdHTllldWRoUEJWQ0lHa204QzJObUNTdUxLRFdBX0ZKakEtSzF1Y1Z6LTJ1eFVvdzFya2ZSd3FNVXQ4dDM3OXQtUTJZMzZjaXRtUERlQ1VxcjVNSXl3MWI5bnVMeG52Zzk5WHRaUTQ5emwxTThJNTVUNmpFZFNqazBOOW82Q3FIX1Zwd2d5cUVuUGFPcTBnbzlrX2o4S3NUMEVKQTAzWE13RTlxTm9PUEh0eERpTExmLTB1X1V4UThFVmhfZmFxVHBnSERtaVkxbmoyT0VZNGRwOENGdDRFN21fSE9XdXZ1bk5Ed1lWbExTZXNCQUFIaHJJdVhEbWs1TXVPZFpmSE84QnR4TEZjQ0tVeUlyRmpicGNSbnlBU2tqYVpqTXFDSHRZcnZmcm8wWEd3c3dGS09uX1ZwS0JHcU1HQy15Yjd4QkhzNmpQUXIxQVZIRFVpTmpzOHFySVJON3lYMUctR0thVHZLZlVlLVVJTWI5cW9SWjJIZ2h1LWtaMjRfQUYtV2NOQzJtSHdTaGhnV0JkQjllREJPV2lsNWMtTGxDem1nV0ZabnRUbXdtRjB5OGpjR2N3aEVIU2Jwd0Q4aUZhRWhtZFNMQms0cy1wSkNmbUlEVU9ham55ZDBfdzlCSUo2YXotaExUMDN6MmZvbHdqSVBlUVVSRVBTbnZ6MWV3MFllYmd4M3lFRkc1amxQeVd5cTVvTVdTcGpsQTdMTURrQWJGT2FWNEdqVGJQN2EzOTA1WWstU2dSV2VSOUJJRnlzV3lielhkSHpfZEs5NVUwV2NRMnY0bkx3N1pzLTdxcE9lelJLbmhJX1E2THRqeW1hNWtCZ3Z6OFB4UVJSNHZrYkhQeHVoZGt4bkFlOFB1TXBhdjVFZE5DU3Q2ZVNpSE13S0pIMC1lMW85S0hRbDRibTlubXNTU3M4OFB3RVl0R0tUT0pIM1VqZjdGR043VlZCelBvSWluTFlwOUVER0VvNnFkWVVwMnZNeWwwQgRjb2RlKhYIjsgSMKKp9MnbxyU6AEIAWP_T15MG"
                  className="text-sm font-bold text-secondary underline"
                >
                  sign in.
                </a>
              </p>
              <p className="text-sm mt-2">
                Offering free pick up from Kathmandu International Airport and
                located a 10-minute drive from the Central Bus Station, Hotel
                Buddha provides cosy rooms with en suite bathrooms. The hotel
                has a 24-hour front desk, and provides laundry and currency
                exchange services.
              </p>
              <p className="text-sm mt-2">
                The hotel is a 30-minute drive from Kathmandu International
                Airport. Popular tourist sites like Kathmandu Darbar Square and
                the Monkey Temple (Swayambhunath Stupa) are located within 5 km
                of Buddha Hotel.
              </p>
              <p className="text-sm mt-2">
                The rooms are air conditioned and well equipped with a satellite
                TV and free toiletries. They have a comfortable seating area.
              </p>
              <p className="text-sm mt-2">
                The restaurant serves Nepali, Italian and Chinese dishes. Guests
                can enjoy their meals in the privacy of their rooms.
              </p>
              <p className="text-sm mt-2">
                This is our guests' favourite part of Kathmandu, according to
                independent reviews.
              </p>
              <p className="text-sm mt-2">
                Couples particularly like the location — they rated it{" "}
                <span className="text-sm font-bold">9.1</span> for a two-person
                trip.
              </p>
              <p className="text-sm font-bold mt-2">
                Hotel Buddha has been welcoming Booking.com guests since 3 Dec
                2012.
              </p>
            </div>
          </div>
          {/* property highlights */}
          <div className="bg-[#ebf3ff] text-text sm:w-96 px-4 mt-4 max-h-96">
            <h1 className="text-base font-bold text-black pt-3">
              Property highlights
            </h1>
            <h1 className="text-sm font-bold text-black mt-2">
              Perfect for an 8-night stay!
            </h1>
            <div className="flex items-start gap-3 text-sm">
              <BsSuitHeartFill className="w-9 h-9" />
              <p>
                Situated in the real heart of Kathmandu, this hotel has an
                excellent location score of 9.0
              </p>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <IoBedOutline className="w-8 h-8" />
              <p>
                {" "}
                Want a great night's sleep? This hotel was highly rated for its
                very comfy beds.
              </p>
            </div>
            <h1 className="text-sm font-bold text-black mt-4 mb-3">
              Breakfast info
            </h1>
            <p className="text-sm">Vegetarian, Gluten-free, Asian, American</p>
            <div className="mt-5 mb-8 flex items-center gap-3 text-sm">
              <FaParking className="w-6 h-6" />
              <p>Free private parking available at the hotel</p>
            </div>
            <Button text="Reserve" padding="px-[4rem] sm:px-[7.5rem] py-3" />
          </div>
        </div>
        {/* popular facilities */}
        <div className="mt-2 text-sm text-text w-full md:max-w-[800px]">
          <h1 className="text-base font-bold mt-3">Most popular facilities</h1>
          {/* icons container */}
          <div className="flex flex-wrap gap-2 ">
            <div className="flex items-center gap-2">
              <FaShuttleVan className="fill-[#008009] w-5 h-5" />
              Airport shuttle
            </div>
            <div className="flex items-center gap-2">
              <FaSmokingBan className="fill-[#008009] w-5 h-5" />
              Non-smoking rooms
            </div>
            <div className="flex items-center gap-2">
              <BsWifi className="fill-[#008009] w-5 h-5" />
              Free wifi
            </div>
            <div className="flex items-center gap-2">
              <MdRoomService className="fill-[#008009] w-5 h-5" />
              Room services
            </div>
            <div className="flex items-center gap-2">
              <FaParking className="fill-[#008009] w-5 h-5" />
              Free parking
            </div>
            <div className="flex items-center gap-2">
              <IoMdWine className="fill-[#008009] w-5 h-5" />
              Bar
            </div>
            <div className="flex items-center gap-2">
              <GiCoffeeCup className="fill-[#008009] w-5 h-5" />
              Very good breakfast
            </div>
          </div>
          <h1 className="font-bold text-sm">
            Currency exchange:{" "}
            <span className="text-sm font-normal">
              Need local currency? This property offers currency exchange on
              site.
            </span>
          </h1>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  );
};

export default IndividualHotel;
