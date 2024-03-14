import express from "express";
import User from "../models/User.js";
import {
	deleteUser,
	getAllUsers,
	getSingleUser,
	updateUser,
} from "../controllers/user.js";

const router = express.Router();

// crud operations

// creation of user has been done through registration in auth.js

// get single user
router.get("/:id", getSingleUser);

// get multiple users
router.get("/", getAllUsers);

// update a user
router.put("/:id", updateUser);

// delete a user
router.delete("/:id", deleteUser);

export default router;
