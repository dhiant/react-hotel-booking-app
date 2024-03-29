import React from "react";
import Carousel from "../common/Carousel";
import useFetch from "../../hooks/useFetch";
import CarouselLoader from "../CarouselLoader";

const HotelsByPropertyType = ({ propertyHeading, ImageHotels }) => {
	const { data, error, loading } = useFetch(
		"http://localhost:8000/api/hotels/countbytype"
	);

	if (loading || error)
		return (
			<>
				<h1 className="text-2xl font-bold mt-12">{propertyHeading}</h1>
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

	const propertyCountByType = data.map((item) => item.count);
	return (
		<div className="mt-8">
			<h1 className="text-2xl font-bold mt-12">{propertyHeading}</h1>
			<Carousel imageGallery={ImageHotels} data={propertyCountByType} />
		</div>
	);
};

export default HotelsByPropertyType;
