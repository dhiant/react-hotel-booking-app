import React from "react";
import Gallery from "../components/featured/Gallery";
import GuestsTravelers from "../components/featured/Guests&Travelers";
import CheckIn from "../components/herosection/CheckIn";
import HeroSection from "../components/herosection/HeroSection";

import HomeGuest from "../components/featured/data/HomeGuest";
import Footer from "../components/footer/Footer";
import LogIn from "../components/LogIn";
import MailList from "../components/MailList";

const Home = () => {
	return (
		<div>
			<HeroSection />
			<CheckIn />
			<Gallery
				exploreHeading="Explore Nepal"
				subHeading="These popular destinations have a lot to offer"
				propertyHeading="Browse by property type"
			/>
			{/* <SuggestedLocations articleHeading="Get inspiration for your next trip" /> */}
			{/* Home Guest Section */}
			<GuestsTravelers
				heading="Homes Guests Love"
				imgGallery={HomeGuest}
				currency="Starting from NPR"
				ratingBox="block"
				discoverHomesCard="block"
				// otherTravelers="Connect With Other Travelers"
			/>
			{/* Other Travelers Section */}
			{/* <GuestsTravelers
        heading="Connect With Other Travelers"
        imgGallery={OtherTravelers}
        currency=""
        ratingBox="hidden"
        discoverHomesCard="hidden"
        // otherTravelers="Connect With Other Travelers"
      /> */}
			{/* Login Section */}
			<LogIn />
			{/* <CountryList /> */}
			<MailList />
			<Footer />
		</div>
	);
};

export default Home;
