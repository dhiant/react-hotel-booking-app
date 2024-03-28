import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import HotelRoomReserveDetails from "./common/HotelRoomReserveDetails";
import { IoIosCloseCircle } from "react-icons/io";
import Button from "./common/Button";
import { HotelSearchContext } from "../context/HotelSearchContext";

const ReserveHotel = ({ handleSetOpenModal, hotelID }) => {
	const [selectedRooms, setSelectedRooms] = useState([]);

	const { date } = useContext(HotelSearchContext);

	const { loading, error, data } = useFetch(
		`http://localhost:8000/api/hotels/room/${hotelID}`
	);

	const getDatesInRange = (startDate, endDate) => {
		const start = new Date(startDate);
		const end = new Date(endDate);

		const date = new Date(start.getTime());

		const dates = [];

		while (date <= end) {
			dates.push(new Date(date).getTime());
			date.setDate(date.getDate() + 1);
		}

		return dates;
	};

	const allDates = getDatesInRange(date[0].startDate, date[0].endDate);

	const navigate = useNavigate();

	const isAvailable = (item) => {
		const isFound = item.unavailableDates.some((date) =>
			allDates.includes(new Date(date).getTime())
		);

		console.log(isFound, "isFound");
		return !isFound;
	};

	const handleReserve = async () => {
		try {
			await Promise.all(
				selectedRooms.map((roomId) => {
					const res = axios.put(
						`http://localhost:8000/api/rooms/availability/${roomId}`,
						{
							dates: allDates,
						}
					);
					return res.data;
				})
			);
			handleSetOpenModal(false);
			navigate("/checkout");
		} catch (err) {
			console.error(err);
		}
	};

	const handleChange = (e) => {
		const checked = e.target.checked;
		const value = e.target.value;
		console.log("checkbox", checked, value);

		setSelectedRooms(
			checked
				? [...selectedRooms, value]
				: selectedRooms.filter((item) => item !== value)
		);
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>{error.message}</p>;

	return (
		<div className="z-10 w-screen h-full fixed top-0 left-0 flex items-center justify-center bg-black bg-opacity-30">
			<div className="h-80 overflow-y-scroll p-4 bg-slate-50">
				<IoIosCloseCircle
					className="text-xl float-right hover:scale-110 hover:cursor-pointer"
					onClick={() => handleSetOpenModal(false)}
				/>
				<p className="text-lg font-semibold">Select your rooms:</p>

				{data &&
					data.map((room) => (
						<div className="flex gap-x-5 justify-between">
							<HotelRoomReserveDetails
								room={room}
								allDates={allDates}
								isAvailable={isAvailable}
								handleChange={handleChange}
							/>
						</div>
					))}
				<Button
					text="Reserve Now!"
					padding="p-2"
					fontWeight="font-medium"
					handleSearch={handleReserve}
				/>
			</div>
		</div>
	);
};

export default ReserveHotel;
