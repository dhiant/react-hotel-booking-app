import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8000;

dotenv.config();

const connect_to_mongodb = async () => {
	// handle intial connection error
	try {
		await mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING);
	} catch (error) {
		throw error;
	}
};

// listen to mongodb events: disconnected & connected
mongoose.connection.on("disconnected", () => {
	console.log("MongoDB is disconnected!");
});

mongoose.connection.on("connected", () => {
	console.log("MongoDB is connected.");
});

// middlewares

app.use(cors());
// parse JSON data sent in the request body
app.use(express.json());
app.use(cookieParser());

// mount middlewares at the specified path
app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);

// define error-handling middleware
app.use((err, req, res, next) => {
	return res.json({
		status: err.status || 500,
		message: err.message || "Something went wrong!!",
		stack: err.stack,
	});
});

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
	connect_to_mongodb();
});
