import React from "react";

const UserEmailInput = ({ credentials, handleChange }) => {
	const { email } = credentials;

	return (
		<input
			type="email"
			name="email"
			id="email"
			placeholder="Email"
			value={email}
			onChange={handleChange}
			required
			className="md:w-full px-6 py-1.5 border-2 border-primary rounded-lg font-normal text-base"
		/>
	);
};

export default UserEmailInput;
