import React from "react";
import ImagePlaces from "./data/ImagePlaces";
import ImageHotels from "./data/ImageHotels";
import useFetch from "../../hooks/useFetch";
import HotelsByCityName from "./HotelsByCityName";
import HotelsByPropertyType from "./HotelsByPropertyType";

const Gallery = (props) => {
	return (
		<div className="max-w-[1080px] mx-auto px-4 lg:px-0">
			<HotelsByCityName
				ImagePlaces={ImagePlaces}
				exploreHeading={props.exploreHeading}
				subHeading={props.subHeading}
			/>
			<HotelsByPropertyType
				ImageHotels={ImageHotels}
				propertyHeading={props.propertyHeading}
			/>
		</div>
	);
};

export default Gallery;
