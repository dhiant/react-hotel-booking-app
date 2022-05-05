import React from "react";
import Header from "../components/herosection/Header";
import Navbar from "../components/herosection/Navbar";
import Form from "../components/Form";
import HotelItem from "../components/HotelItem";
// import MailList from "../components/MailList";
// import Footer from "../components/footer/Footer";

const Hotels = () => {
  return (
    <div>
      <div className="bg-primary pb-5">
        <Header />
        <Navbar />
      </div>
      <div className="flex items-start lg:justify-evenly justify-between mt-8">
        <Form className="items-start" />
        <div className="flex flex-col gap-4">
          <HotelItem />
          <HotelItem />
          <HotelItem />
          <HotelItem />
          <HotelItem />
        </div>
      </div>
      {/* <MailList />
      <Footer /> */}
    </div>
  );
};

export default Hotels;
