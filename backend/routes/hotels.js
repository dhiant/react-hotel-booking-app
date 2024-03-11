import express from "express";
import Hotel from "../models/Hotel.js";
import { ReturnDocument } from "mongodb";

const router = express.Router();

// create a new hotel (create operation)
router.post("/", async (req, res) => {
	try {
		const newHotel = new Hotel(req.body);
		const savedHotel = await newHotel.save();
		res.status(201).json(savedHotel);
	} catch (err) {
		res.status(500).json(err);
	}
});

// get hotel (read operation)
router.get("/:id", async (req, res) => {
	try {
		const hotel = await Hotel.findById(req.params.id);
		if (!hotel) return res.status(404).json({ message: "Hotel not found" });
		res.json(hotel);
	} catch (err) {
		res.status(500).json(err);
	}
});

// get all hotels (read operation)
router.get("/", async (req, res) => {
	try {
		const allHotels = await Hotel.find();
		res.status(200).json(allHotels);
	} catch (err) {
		res.status(500).json(err);
	}
});

// update a hotel (update operation)
router.put("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const update = req.body;
		const updatedHotel = await Hotel.findByIdAndUpdate(id, update, {
			returnDocument: "after",
		});
		res.status(200).json(updatedHotel);
	} catch (err) {
		res.status(500).json(err);
	}
});

// delete a hotel (delete operation)
router.delete("/:id", async (req, res) => {
	try {
		await Hotel.findByIdAndDelete(req.params.id);
		res.status(200).json("Hotel has been deleted!");
	} catch (err) {
		res.status(500).json(err);
	}
});

export default router;
