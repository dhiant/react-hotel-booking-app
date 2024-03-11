import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";

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

// parse JSON data sent in the request body
app.use(express.json());

// mount middlewares at the specified path
app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
	connect_to_mongodb();
});
