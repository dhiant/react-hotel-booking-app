import React from "react";
import Carousel from "../common/Carousel";
import useFetch from "../../hooks/useFetch";

const HotelsByPropertyType = ({ propertyHeading, ImageHotels }) => {
	const { data, error, loading } = useFetch(
		"http://localhost:8000/api/hotels/countbytype"
	);

	if (loading) return "Loading";
	if (error) return "error occurs";

	const propertyCountByType = data.map((item) => item.count);
	return (
		<div className="mt-8">
			<h1 className="text-2xl font-bold mt-12">{propertyHeading}</h1>
			<Carousel imageGallery={ImageHotels} data={propertyCountByType} />
		</div>
	);
};

export default HotelsByPropertyType;
