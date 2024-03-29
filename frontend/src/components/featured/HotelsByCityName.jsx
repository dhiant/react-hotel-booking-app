import React from "react";
import Carousel from "../common/Carousel";
import useFetch from "../../hooks/useFetch";
import CarouselLoader from "../CarouselLoader";

const HotelsByCityName = ({ exploreHeading, subHeading, ImagePlaces }) => {
	const { data, error, loading } = useFetch(
		"http://localhost:8000/api/hotels/countbycity?cities=pokhara,kathmandu,nagarkot,sauraha"
	);

	if (loading || error)
		return (
			<>
				<h1 className="text-2xl font-bold mt-6">{exploreHeading}</h1>
				<p className="text-base">{subHeading}</p>
				<CarouselLoader
					contentLoaderWidth="1100"
					contentLoaderHeight="150"
					rectData={[
						{ x: 15, y: 20 },
						{ x: 190, y: 20 },
						{ x: 365, y: 20 },
						{ x: 540, y: 20 },
						{ x: 715, y: 20 },
						{ x: 890, y: 20 },
					]}
					rectWidth="165"
					rectHeight="140"
				/>
			</>
		);

	return (
		<>
			<h1 className="text-2xl font-bold mt-6">{exploreHeading}</h1>
			<p className="text-base">{subHeading}</p>
			<Carousel imageGallery={ImagePlaces} data={data} />
		</>
	);
};

export default HotelsByCityName;
