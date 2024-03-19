import React from "react";
import Carousel from "../common/Carousel";
import useFetch from "../../hooks/useFetch";

const HotelsByCityName = ({ exploreHeading, subHeading, ImagePlaces }) => {
	const { data, error, loading } = useFetch(
		"http://localhost:8000/api/hotels/countbycity?cities=pokhara,kathmandu,nagarkot,sauraha"
	);

	if (loading) return "Loading";
	if (error) return "error occurs";
	return (
		<>
			<h1 className="text-2xl font-bold mt-6">{exploreHeading}</h1>
			<p className="text-base">{subHeading}</p>
			<Carousel imageGallery={ImagePlaces} data={data} />
		</>
	);
};

export default HotelsByCityName;
