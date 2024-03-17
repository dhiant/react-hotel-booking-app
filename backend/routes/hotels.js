import express from "express";
import Hotel from "../models/Hotel.js";
import { ReturnDocument } from "mongodb";
import {
	createNewHotel,
	deleteHotel,
	getAllHotels,
	getHotelCountByCityName,
	getSingleHotel,
	updateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// create a new hotel (create operation)
router.post("/", verifyAdmin, createNewHotel);

// get hotel (read operation)
router.get("/single/:id", getSingleHotel);

// get all hotels (read operation)
router.get("/", getAllHotels);

// update a hotel (update operation)
router.put("/:id", verifyAdmin, updateHotel);

// delete a hotel (delete operation)
router.delete("/:id", verifyAdmin, deleteHotel);

// get the numbers of hotels by city name
router.get("/count", getHotelCountByCityName);

export default router;
