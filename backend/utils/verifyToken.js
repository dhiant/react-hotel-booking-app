import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

//  Authentication
export const verifyToken = (req, res, next) => {
	try {
		// Get token from header
		const token = req.cookies.access_token;
		if (!token)
			return res
				.status(401)
				.send({ auth: false, message: "No token provided." });

		jwt.verify(token, process.env.JSON_WEB_TOKEN_SECRET_KEY, (err, decoded) => {
			if (err)
				return res
					.status(401)
					.send({ auth: false, message: "Token is not valid!" });
			else {
				// Add user data to request object
				req.userData = decoded;
				next();
			}
		});
	} catch (err) {
		next(err);
	}
};

// Authorization
export const verifyUser = (req, res, next) => {
	// first authenticate a user
	verifyToken(req, res, () => {
		// once the user is authenticated check if  he/her is an admin or a user with id
		if (req.userData._id === req.params.id || req.userData.isAdmin) {
			next();
		} else {
			res.status(401).send("You are not authorized to perform this action!");
		}
	});
};

// Authorization
export const verifyAdmin = (req, res, next) => {
	// first authenticate a user
	verifyToken(req, res, () => {
		// once the user is authenticated check if  he/her is an admin
		if (req.userData.isAdmin) {
			next();
		} else {
			res.status(403).json({
				message:
					"Sorry! You are not an admin! You are not allowed to perform this action!",
			});
		}
	});
};
