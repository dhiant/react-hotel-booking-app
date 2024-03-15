import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

//  Authentication
export const verifyToken = (req, res, next) => {
	try {
		// Get token from header
		const token = req.cookies.access_token;
		console.log("token", token);
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
