import express from "express";
import {
	deleteUser,
	getAllUsers,
	getSingleUser,
	updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// authenticate a user
router.get("/authenticate", verifyToken, (req, res, next) => {
	res.status(200).json({ message: "Congrats! Authentication successful" });
});

// check if user is authorized to perform  certain actions
router.get("/authorize/:id", verifyUser, (req, res, next) => {
	res.status(200).json({
		message:
			"Congrts! You are authorized to perform this action on the requested resource.",
	});
});

// check if user is an admin
router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
	res.status(200).json({
		message:
			"Congrts! You are an admin. Now, You can perform any admin related operations.",
	});
});

// crud operations

// creation of user has been done through registration in auth.js

// only the verified personnels can perform the below tasks

// get single user
router.get("/:id", verifyUser, getSingleUser);

// get multiple users
router.get("/", verifyAdmin, getAllUsers);

// update a user
router.put("/:id", verifyUser, updateUser);

// delete a user
router.delete("/:id", verifyUser, deleteUser);

export default router;
