import React from "react";
// import HomeGuest from "../data/HomeGuest";
import Card from "../common/Card";
import GuestDetails from "./GuestDetails";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// importing Custom CSS
import "../styles/SwiperCarousel.css";
import useFetch from "../../hooks/useFetch";
import CarouselLoader from "../CarouselLoader";
// import "swiper/css/thumbs";

const GuestsTravelers = (props) => {
	const { data, error, loading } = useFetch(
		"http://localhost:8000/api/hotels/?featured=true"
	);

	if (loading || error)
		return (
			<div className="max-w-[1080px] mx-auto px-4 lg:px-0">
				<h1 className="text-2xl font-bold mt-6">{props.heading}</h1>
				<CarouselLoader
					contentLoaderWidth="1100"
					contentLoaderHeight="250"
					rectData={[
						{ x: 15, y: 20 },
						{ x: 280, y: 20 },
						{ x: 545, y: 20 },
						{ x: 810, y: 20 },
					]}
					rectWidth="240"
					rectHeight="224"
				/>
			</div>
		);

	return (
		<div className="max-w-[1080px] mx-auto px-4 lg:px-0">
			<h1 className="text-2xl font-bold mt-6">{props.heading}</h1>
			<Swiper
				spaceBetween={5}
				slidesPerView={"auto"}
				loop={false}
				// grabCursor={true}
				navigation={true}
				modules={[Navigation]}
				breakpoints={{
					1024: {
						slidesPerView: 4,
						spaceBetween: 15,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 5,
					},
					520: {
						slidesPerView: 2,
						spaceBetween: 5,
					},
				}}
			>
				{data.map((item) => (
					<SwiperSlide key={item.id}>
						<div className="w-60 mx-auto">
							<Card
								// link={item.link}
								img={item.photos[0]}
								divWidth="w-64 sm:w-64 md:w-64"
								imgWidth="w-full sm:w-64 md:w-56 lg:w-60"
								imgHeight="h-56"
								// propertyCount={item.distance}
								heading="Homes Guests Love"
							/>
							<GuestDetails
								// link={item.link}
								title={item.name}
								location={item.city}
								cost={item.cheapestPrice}
								rating={item.rating}
								feedback={item.feedback}
								reviews={item.reviews}
								// for other travelers
								// country={item.country}
								// community={item.community}
								// travelers={item.travelers}
								// currency={props.currency}
								// here giving ratingBox another prop name "display" to prevent from undefined value
								// ratingBox={props.ratingBox}
							/>
						</div>
					</SwiperSlide>
				))}
				{/* SwiperSlide for last card with Discover Homes Button */}
				<SwiperSlide>
					<div className="w-64 relative mx-auto">
						<a
							href="https://www.booking.com/booking-home/index.html?label=gen173nr-1DCAEoggI46AdIM1gEaKsBiAEBmAExuAEXyAEM2AED6AEB-AECiAIBqAIDuAKKpKiTBsACAdICJDk1OTQ3YmFiLTQzYmYtNDQ1ZS1iNjE5LTU3ZWU1NjJkMjUyONgCBOACAQ&amp;sid=2c650482c8c6f75f3aece18e6fa76eb5&amp;amp;bhc_from_index_bh=1"
							target="_blank"
							rel="noreferrer"
						>
							<div>
								<img
									src="https://cf.bstatic.com/static/img/join/bh_carousel_more_background/5132764897ca62019efeefc5ad9c296227434ba9.jpg"
									alt=""
									className="mt-5"
								/>
								<h1 className="text-base font-medium text-white absolute top-8 left-2 px-2">
									We have a lot more homes and apartments we think you"ll love!
								</h1>
								<button className="bg-white text-secondary font-medium text-sm border-2 border-secondary px-6 py-1 absolute left-2 right-5 bottom-6">
									Discover Homes
								</button>
							</div>
						</a>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default GuestsTravelers;
