import express from "express";
import {
	createRoom,
	deleteRoom,
	getAllRooms,
	getSingleRoom,
	updateRoom,
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

// delete operation
router.delete("/:id", verifyAdmin, deleteRoom);

export default router;
