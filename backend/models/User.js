import { mongoose } from "mongoose";

const { Schema } = mongoose;

// Define the User schema.
const UserSchema = new Schema(
	{
		username: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		email: { type: String, required: true },
		isAdmin: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

// Create a User Model and Export it
export default mongoose.model("User", UserSchema);
