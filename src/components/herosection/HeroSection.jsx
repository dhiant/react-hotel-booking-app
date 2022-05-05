import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Button from "../reusable/Button";

const HeroSection = () => {
  return (
    <div className="bg-primary pb-16">
      <Header />
      <Navbar />
      <div className="text-white max-w-[1080px] mt-8 md:mt-16 mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold">
          A lifetime of discounts? It's Genius.
        </h2>
        <p className="text-xl md:text-2xl mt-2 max-w-[950px] mb-8">
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free Booking.com account
        </p>
        <a
          href="https://account.booking.com/sign-in?op_token=EgVvYXV0aCKYBQoUdk8xS2Jsazd4WDl0VW4yY3BaTFMSCWF1dGhvcml6ZRo1aHR0cHM6Ly9zZWN1cmUuYm9va2luZy5jb20vbG9naW4uaHRtbD9vcD1vYXV0aF9yZXR1cm4qtwRVcVlEY2JJYUxKMFdfN0tWcVhDdUtKSFVicmJkSkpvczRvVVJ2dmtTZlZwV1ppZWV6RW4wdlBKWUctWnpraTJxT1hlZzdiaUdIdExHYktLZUZhamJpLUdiekZBMkV0Y3hrSkVORnJ4UkVCZ0lOTTlfeTdnd0hsaENSOHZIeGZQM2pwOU9TM1F6dGMtSy1La0lmTEZtNVJpTnp4TFNWSHZHNnFtRjctdmM2bE1XRWU5Yk5YcHlqR2Z2amVhZG1DX2VkNDgzZjRDM1phT1hZa1VtdTdlNXJTdjROSGdXYUpLSHMxa3FOS3RINkUxZnVyelN4TzhNOFlCazJuM1ZiUXlsS3RLTV9BejlFTUpoY0x5Z3NTekVPSEppNkdBWmEyTzFMUEpUSVI0eTBTTHRJVURfQ2Ria3M1aG0tNUhyUzVNZGNkUXp4b2Q0QzJaOE9UbnFLTE5LTlptaEgzSDBNaU1wMzd4bFN6MUJMNWk3YWxQRXFaZlJCZTM5bzdsd1pZZGpQSWRzalpJSEZCdUxIbVNDZWhQTXh3Y2gycWxBcjM3T0dEUUdITnZvNm9jQTg5TG5YdjFXdXNIUWhianI0eURxRXdzMTBvYkdMY21uQ0tWX1NIV3g2ZU5rOTlpSmgzZW82YlppZldDYWxsTldxcjJmZFd2U3JFMElmb1E3MThIdG5SX2hmRTEyOTBqejFjc0N3RmtKa2FFLXQxWk5RMjVfeHJqdnRSSHhLVjRfZXZTc2RQeU1tSG9CBGNvZGUqFgiOyBIwm47ujOTGJToAQgBY6ZHAkwY"
          alt="create an account"
        >
          <Button text="Sign in / Register" padding="p-4" />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
