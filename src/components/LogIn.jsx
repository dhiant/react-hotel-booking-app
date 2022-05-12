import React from "react";

const LogIn = () => {
  return (
    <div className="max-w-[1080px] mx-auto border-2 border-border px-4 py-3 mt-10 flex items-center bg-[url('https://cf.bstatic.com/static/img/genius-banner-world-bg/2b5cdbad7b92073bc396b8b59d0bb421b3a01cba.png')] bg-right-top bg-no-repeat">
      <div className="flex items-center justify-center w-40 h-40 min-w-[96px]">
        <img
          src="https://cf.bstatic.com/static/img/genius-globe-with-badge_desktop/d807514761b3684aedebced9265c5548a063b7a0.png"
          alt="genius globe"
        />
      </div>
      <div className="flex flex-col max-w-md">
        <h1 className="text-xl md:text-2xl font-bold">Get instant discounts</h1>
        <p className="text-sm md:text-base text-[#262626]">
          Just sign into your Booking.com account and look for the blue Genius
          logo to save
        </p>
        <div className="flex mt-4 gap-2">
          <button className="border-2 border-secondary hover:bg-[#F0F7FC] e text-secondary px-4 py-2 leading-none text-sm font-bold hover:underlin">
            Sign in
          </button>
          <button className="text-secondary px-4 py-2 leading-none text-sm font-bold hover:bg-[#F0F7FC] hover:underline active:border-2 active:border-secondary">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
