import React from "react";

const UsernameInput = ({ credentials, handleChange }) => {
	const { username } = credentials;

	return (
		<input
			type="text"
			name="username"
			id="username"
			placeholder="Username"
			value={username}
			onChange={handleChange}
			required
			className="md:w-full px-6 py-1.5 border-2 border-primary rounded-lg font-normal text-base"
		/>
	);
};

export default UsernameInput;
