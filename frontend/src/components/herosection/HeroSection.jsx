import React, { useContext } from "react";
import Header from "./Header";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const HeroSection = () => {
	const { user } = useContext(AuthContext);

	return (
		<div className="bg-primary pb-16">
			<Header />
			{/* <Navbar /> */}
			<div className="text-white max-w-[1080px] mt-8 md:mt-16 mx-auto">
				<h2 className="text-3xl md:text-5xl font-bold">
					A lifetime of discounts? It's Genius.
				</h2>
				<p className="text-xl md:text-2xl mt-2 max-w-[950px] mb-8">
					Get rewarded for your travels - unlock instant savings of 10% or more
					with a free Roomies account
				</p>
				{!user && (
					<Link to="/login" alt="create an account">
						<Button text="Sign in / Register" padding="p-4" />
					</Link>
				)}
			</div>
		</div>
	);
};

export default HeroSection;
