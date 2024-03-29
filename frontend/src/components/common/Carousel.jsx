import React from "react";

// Import React Slick for Carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom CSS for Carousel
import "../styles/Carousel.css";
import Card from "./Card";

// Icons for Carousel Arrow
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				background: "#fff",
				color: "#404040",
				height: "2rem",
				width: "2rem",
				borderRadius: "50%",
			}}
			onClick={onClick}
		>
			{/* Icon for left carousel arrow */}
			<MdArrowBackIos style={{ fontSize: "20px" }} />
		</div>
	);
}

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				background: "#fff",
				color: "#404040",
				height: "2rem",
				width: "2rem",
				borderRadius: "50%",
			}}
			onClick={onClick}
		>
			{/* Icon for right carousel arrow */}
			<MdArrowForwardIos style={{ fontSize: "20px" }} />
		</div>
	);
}

const Carousel = ({ imageGallery, data }) => {
	let settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1080,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 670,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 506,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 335,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
		],
	};
	return (
		<div className="carouselContainer">
			<Slider {...settings}>
				{imageGallery.map((item, index) => (
					<Card
						key={item.id}
						// link={item.link}
						img={item.img}
						title={item.title}
						propertyCount={data && data[index]}
						divWidth="w-44"
						imgWidth="w-32 sm:w-36 md:w-40"
						imgHeight="h-36"
					/>
				))}
			</Slider>
		</div>
	);
};

export default Carousel;
