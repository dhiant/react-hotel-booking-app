import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

// create operation
export const createRoom = async (req, res, next) => {
	const hotelID = req.params.id;
	try {
		const newRoom = await new Room(req.body).save();

		// once new room is created push the id of that room in rooms array of desired(id) Hotel document
		const updatedHotel = await Hotel.findByIdAndUpdate(hotelID, {
			$push: {
				rooms: newRoom._id,
			},
		});
		res.status(200).json({
			message: `Created room ${newRoom} and updated hotel ${updatedHotel}`,
		});
	} catch (err) {
		next(err);
	}
};

// read operation
export const getSingleRoom = async (req, res, next) => {
	const roomId = req.params.id;

	try {
		const room = await Room.findById(roomId);
		if (!room) return res.status(404).json({ message: "No such room exists" });

		res.status(200).json(room);
	} catch (err) {
		next(err);
	}
};

// read operation
export const getAllRooms = async (req, res, next) => {
	try {
		const allRooms = await Room.find();
		res.status(200).json(allRooms);
	} catch (err) {
		next(err);
	}
};

// update operation
export const updateRoom = async (req, res, next) => {
	const id = req.params.id;
	const update = req.body;

	try {
		const updatedRoom = await Room.findByIdAndUpdate(id, update, { new: true }); //return the updated document
		res.status(200).json(updatedRoom);
	} catch (err) {
		next(err);
	}
};

// delete operation
export const deleteRoom = async (req, res, next) => {
	const id = req.params.id;

	try {
		await Room.findByIdAndDelete(id);
		res.status(200).json({ message: `Deleted room with id: ${id} ` });
	} catch (err) {
		next(err);
	}
};
