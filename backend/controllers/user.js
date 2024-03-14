import User from "../models/User.js";

// creation of user has been done through registration route in auth.js

// read operation
export const getSingleUser = async (req, res, next) => {
	try {
		let userID = req.params.id;
		const user = await User.findById(userID);

		res.status(200).json(user);
	} catch (err) {
		next(err);
	}
};

// read operation
export const getAllUsers = async (req, res, next) => {
	try {
		const users = await User.find();

		res.status(200).json(users);
	} catch (err) {
		next(err);
	}
};

// update operation
export const updateUser = async (req, res, next) => {
	try {
		let userID = req.params.id;
		let update = req.body;

		const updatedUser = await User.findByIdAndUpdate(userID, update, {
			returnDocument: "after",
		});

		res.status(200).json(updatedUser);
	} catch (err) {
		next(err);
	}
};

// delete operation
export const deleteUser = async (req, res, next) => {
	try {
		let userID = req.params.id;

		await User.findByIdAndDelete(userID);

		res.status(200).json("User has been deleted!");
	} catch (err) {
		next(err);
	}
};
