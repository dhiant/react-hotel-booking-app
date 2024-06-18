import React from "react";
import CheckoutForm from "../components/checkout/CheckoutForm";
import Header from "../components/herosection/Header";
import MailList from "../components/MailList";
import Footer from "../components/footer/Footer";

const Checkout = () => {
	return (
		<>
			<div className="bg-primary py-2">
				<Header />
			</div>
			<CheckoutForm />
			<MailList />
			<Footer />
		</>
	);
};

export default Checkout;
