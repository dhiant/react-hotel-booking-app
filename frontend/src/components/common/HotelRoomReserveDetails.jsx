import React from "react";
import HotelRoomNumberWrapper from "./HotelRoomNumberWrapper";

const HotelRoomReserveDetails = ({
	handleChange,
	allDates,
	room,
	isAvailable,
}) => {
	const { desc, maxPeople, price, title, roomNumbers } = room;
	return (
		<div className="p-4 flex gap-x-5 items-center justify-items-end">
			<div className="">
				<h1 className="text-lg font-medium">{title}</h1>
				<p className="text-sm">{desc}</p>
				<p className="text-sm">
					Max people: <span className="font-semibold">{maxPeople}</span>
				</p>
				<p className="text-lg font-semibold">NPR {price}</p>
			</div>
			{roomNumbers.map((item) => (
				<HotelRoomNumberWrapper
					item={item}
					allDates={allDates}
					isAvailable={isAvailable}
					handleChange={handleChange}
				/>
			))}
		</div>
	);
};

export default HotelRoomReserveDetails;
