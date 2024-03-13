import { encrypt } from "../algorithms/AES_Cipher.js";
import User from "../models/User.js";

//  register a new user
export const register = async (req, res, next) => {
	try {
		let originalPassword = req.body.password;
		// encrpt the original password before sending it into database
		let hashedPassword = encrypt(originalPassword);
		const newUser = new User({ ...req.body, password: hashedPassword });
		await newUser.save();
		res.status(200).send("New User has been created!");
	} catch (err) {
		next(err);
	}
};

//  login a registered user
export const login = async (req, res, next) => {
	try {
		// first search for username
		let user = await User.findOne({ username: req.body.username });

		// if no username found
		if (!user) return res.status(401).json("No user found");

		// if username exists verify his/her password
		if (user.password === encrypt(req.body.password)) {
			console.log("password matched");
			return res.status(200).json("password matched");
		} else {
			return res.status(401).json("Wrong Password");
		}
	} catch (err) {
		next(err);
	}
};
