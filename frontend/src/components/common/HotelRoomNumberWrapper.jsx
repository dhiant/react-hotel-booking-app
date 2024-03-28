import React from "react";

const HotelRoomNumberWrapper = ({ handleChange, item, isAvailable }) => {
	return (
		<div>
			<label className="text-textLight text-sm" htmlFor="room_number">
				{item.room_number}
			</label>
			<input
				type="checkbox"
				name="room_number"
				id="room_number"
				value={item._id}
				onChange={handleChange}
				className="ml-2"
				disabled={!isAvailable(item)}
			/>
		</div>
	);
};

export default HotelRoomNumberWrapper;
