import express from "express";
import User from "../models/User.js";

const router = express.Router();

//  @route   Create new user api/users
router.post("/", async (req, res, next) => {
	try {
		const newUser = new User(req.body);
		await newUser.save();
		res.status(200).send("New User has been created!");
	} catch (err) {
		next(err);
	}
});

export default router;
