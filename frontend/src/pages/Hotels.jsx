import React, { useState } from "react";
import Header from "../components/herosection/Header";
import Navbar from "../components/herosection/Navbar";
import Form from "../components/Form";
import HotelItem from "../components/HotelItem";
import MailList from "../components/MailList";
import Footer from "../components/footer/Footer";
import useFetch from "../hooks/useFetch";
import { useLocation } from "react-router-dom";
import HotelItemLoader from "../components/HotelItemLoader";

const Hotels = () => {
	const location = useLocation();

	// destination from home page
	const [destination, setDestination] = useState(
		location.state ? location.state.destination : ""
	);

	const [minPrice, setMinPrice] = useState(
		location.state.min ? location.state.min : 500
	);
	const [maxPrice, setMaxPrice] = useState(
		location.state.max ? location.state.max : 10000
	);

	const { data, error, loading, reFetch } = useFetch(
		`http://localhost:8000/api/hotels/?city=${destination}&min=${minPrice}&max=${maxPrice}`
	);

	if (error) return "Error Occurs!!";
	console.log(data);
	return (
		<div>
			<div className="bg-primary pb-5">
				<Header />
				<Navbar />
			</div>
			<div className="flex items-start justify-center gap-x-10 mt-8">
				<Form
					className=""
					destination={destination}
					setDestination={setDestination}
					minPrice={minPrice}
					maxPrice={maxPrice}
					setMinPrice={setMinPrice}
					setMaxPrice={setMaxPrice}
					reFetch={reFetch}
				/>
				{loading && (
					<div className="max-w-3xl">
						<HotelItemLoader />
					</div>
				)}
				{data && data.length > 0 ? (
					<div className="flex flex-col gap-4">
						{data.map((hotel) => (
							<HotelItem hotelDetail={hotel} />
						))}
					</div>
				) : (
					<div className="max-w-3xl">
						<p className="text-xl font-bold py-2">No Properties Found</p>
						<HotelItemLoader />
					</div>
				)}
			</div>
			<MailList />
			<Footer />
		</div>
	);
};

export default Hotels;
