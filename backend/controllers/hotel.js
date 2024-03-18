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

export const getHotelCountByCityName = async (req, res, next) => {
	// get the city names
	let citynames = req.query.cities;
	// as cities are in string(query params) convert it into (cities)array  of strings
	let cities = citynames.split(",");

	try {
		const count = await Promise.all(
			cities.map((city) => {
				// make the first letter of city names Capital
				let firstLetter = city[0];
				let remainingLetters = city.slice(1);
				let _city = firstLetter.toUpperCase().concat(remainingLetters);

				return Hotel.countDocuments({ city: _city });
			})
		);
		res.status(200).json(count);
	} catch (err) {
		next(err);
	}
};

export const getHotelCountByType = async (req, res, next) => {
	try {
		const hotelCount = await Hotel.countDocuments({ type: "Hotel" });
		const apartmentCount = await Hotel.countDocuments({ type: "Apartment" });
		const resortCount = await Hotel.countDocuments({ type: "Resort" });
		const villaCount = await Hotel.countDocuments({ type: "Villa" });
		const cabinCount = await Hotel.countDocuments({ type: "Cabin" });

		res.status(200).json([
			{ type: "hotel", count: hotelCount },
			{ type: "apartments", count: apartmentCount },
			{ type: "resorts", count: resortCount },
			{ type: "villas", count: villaCount },
			{ type: "cabins", count: cabinCount },
		]);
		res.status(200).json(count);
	} catch (err) {
		next(err);
	}
};
