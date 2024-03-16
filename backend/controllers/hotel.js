import Hotel from "../models/Hotel.js";

// create operation
export const createNewHotel = async (req, res, next) => {
	try {
		const newHotel = new Hotel(req.body);
		const savedHotel = await newHotel.save();
		res.status(201).json(savedHotel);
	} catch (err) {
		next(err);
	}
};

// read operation
export const getSingleHotel = async (req, res, next) => {
	try {
		const hotel = await Hotel.findById(req.params.id);
		if (!hotel) return res.status(404).json({ message: "Hotel not found" });
		res.json(hotel);
	} catch (err) {
		next(err);
	}
};

// read operation
export const getAllHotels = async (req, res, next) => {
	try {
		const allHotels = await Hotel.find();
		res.status(200).json(allHotels);
	} catch (err) {
		next(err);
	}
};

// update operation
export const updateHotel = async (req, res, next) => {
	try {
		const id = req.params.id;
		const update = req.body;
		const updatedHotel = await Hotel.findByIdAndUpdate(id, update, {
			returnDocument: "after",
		});
		res.status(200).json(updatedHotel);
	} catch (err) {
		next(err);
	}
};

// delete operation
export const deleteHotel = async (req, res, next) => {
	try {
		await Hotel.findByIdAndDelete(req.params.id);
		res.status(200).json("Hotel has been deleted!");
	} catch (err) {
		next(err);
	}
};
