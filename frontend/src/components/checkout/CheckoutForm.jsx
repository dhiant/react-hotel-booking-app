import React, { useState } from "react";

const CheckoutForm = () => {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phone: "",
		cardNumber: "",
		expiryDate: "",
		cvv: "",
	});

	const [submissionStatus, setSubmissionStatus] = useState(null); // Tracks submission status

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			// Simulate submission process (replace with actual submission logic)
			// Here, you can send form data to the server and await response
			// For simplicity, we're just simulating a successful submission
			// In a real application, handle both successful submission and error cases based on server response
			await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating async operation

			// Clear form data and set submission status to success
			setFormData({
				fullName: "",
				email: "",
				phone: "",
				cardNumber: "",
				expiryDate: "",
				cvv: "",
			});
			setSubmissionStatus("success");
		} catch (error) {
			// Handle error cases here
			console.error(error);
			setSubmissionStatus("error");
		}
	};

	return (
		<div className="max-w-5xl mx-auto mt-8 bg-white text-black p-4">
			<form onSubmit={handleSubmit}>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
						<label className="block mb-2">Full Name</label>
						<input
							type="text"
							name="fullName"
							value={formData.fullName}
							onChange={handleChange}
							className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
							required
						/>
					</div>
					<div>
						<label className="block mb-2">Email</label>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
							required
						/>
					</div>
					<div>
						<label className="block mb-2">Phone</label>
						<input
							type="tel"
							name="phone"
							value={formData.phone}
							onChange={handleChange}
							className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
							required
						/>
					</div>
					<div>
						<label className="block mb-2">Card Number</label>
						<input
							type="text"
							name="cardNumber"
							value={formData.cardNumber}
							onChange={handleChange}
							className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
							required
						/>
					</div>
					<div>
						<label className="block mb-2">Expiry Date</label>
						<input
							type="text"
							name="expiryDate"
							value={formData.expiryDate}
							onChange={handleChange}
							className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
							placeholder="MM/YYYY"
							required
						/>
					</div>
					<div>
						<label className="block mb-2">CVV</label>
						<input
							type="text"
							name="cvv"
							value={formData.cvv}
							onChange={handleChange}
							className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
							required
						/>
					</div>
				</div>
				<button
					type="submit"
					className="mt-8 w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
				>
					Place Order
				</button>
			</form>
		</div>
	);
};

export default CheckoutForm;
