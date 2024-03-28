import React, { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const UserPasswordInput = ({ credentials, handleChange }) => {
	const [showPassword, setShowPassword] = useState(false);

	const { password } = credentials;

	const handleClick = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className="relative md:w-full ">
			<input
				type={`${showPassword ? "text" : "password"}`}
				name="password"
				id="password"
				placeholder="Password"
				value={password}
				onChange={handleChange}
				required
				autoComplete="on"
				className="w-full px-6 py-1.5 border-2 border-primary rounded-lg font-normal text-base"
			/>
			{showPassword ? (
				<BsFillEyeSlashFill
					className="absolute right-5 top-3 text-lg hover:cursor-pointer"
					onClick={handleClick}
				/>
			) : (
				<BsFillEyeFill
					className="absolute right-5 top-3 text-lg hover:cursor-pointer"
					onClick={handleClick}
				/>
			)}
		</div>
	);
};

export default UserPasswordInput;
