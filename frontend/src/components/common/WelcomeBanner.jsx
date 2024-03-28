import React from "react";

const WelcomeBanner = () => {
	return (
		<div className="px-3 w-full md:w-1/2 h-1/2 md:h-full bg-primary text-white flex justify-center items-center flex-col gap-y-5">
			<h1 className="uppercase text-2xl md:text-3xl font-semibold">
				Welcome to Hotel Booking App :)
			</h1>
			<p className="font-normal text-base">Plan your perfect stay with us!</p>
			<p className="font-normal text-base">
				Discover a wide range of hotels, explore room options, and find the best
				deals. With our user-friendly interface, you can quickly make
				reservations and manage your bookings hassle-free.
			</p>
		</div>
	);
};

export default WelcomeBanner;
