import express from "express";
import {
	deleteUser,
	getAllUsers,
	getSingleUser,
	updateUser,
} from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

// authenticate a user
router.get("/authenticate", verifyToken, (req, res, next) => {
	res.status(200).json({ message: "Congrats! Authentication successful" });
});

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
