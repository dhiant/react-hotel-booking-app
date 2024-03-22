import React from "react";

const PriceInput = ({ label, name, value, handler }) => {
	return (
		<div className="relative">
			<label htmlFor={name} className="text-sm">
				{label}
			</label>
			<input
				type="text"
				name={name}
				id={name}
				placeholder=""
				className="py-1 pl-4 rounded-sm w-full"
				value={value}
				onChange={(e) => handler(e.target.value)}
			/>
		</div>
	);
};

export default PriceInput;
