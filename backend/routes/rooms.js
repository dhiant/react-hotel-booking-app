import express from "express";
import {
	createRoom,
	deleteRoom,
	getAllRooms,
	getSingleRoom,
	updateRoom,
	updateRoomAvailability,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// only the admin can perform create, update & delete operation

// create operation
router.post("/:id", verifyAdmin, createRoom);

// read operation
router.get("/:id", getSingleRoom);

// read operation
router.get("/", getAllRooms);

// update operation
router.put("/:id", verifyAdmin, updateRoom);

// update room availability status
// here we pass the id of room number
router.put("/availability/:id", updateRoomAvailability);

// delete operation
router.delete("/:id", verifyAdmin, deleteRoom);

export default router;
