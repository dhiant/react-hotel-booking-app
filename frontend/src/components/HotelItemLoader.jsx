import React from "react";
import ContentLoader from "react-content-loader";

const HotelItemLoader = () => {
	return (
		<div className="px-2 py-3 border-2 border-border">
			<ContentLoader
				speed={2}
				width={800}
				height={160}
				viewBox="0 0 800 160"
				backgroundColor="#e7e7e7"
				foregroundColor="#bab5b5"
			>
				{/* img loader */}
				<rect x="0" y="0" width="160" height="160" />

				{/* title loader */}
				<rect x="180" y="0" width="200" height="10" />
				{/* address loader */}
				<rect x="180" y="20" width="220" height="5" />
				{/* distance loader */}
				<rect x="180" y="30" width="150" height="5" />

				{/* hotel type */}
				<rect x="180" y="65" width="80" height="5" />
				{/* description loader */}
				<rect x="180" y="80" width="300" height="40" />
				{/* breakfast included */}
				<rect x="180" y="130" width="80" height="5" />

				{/* review */}
				<rect x="620" y="0" width="80" height="5" />
				{/* rating */}
				<rect x="720" y="0" width="25" height="25" />
				{/* price */}
				<rect x="700" y="65" width="50" height="5" />
				<rect x="680" y="75" width="70" height="5" />

				{/* explore button */}
				<rect x="690" y="130" width="60" height="25" />
			</ContentLoader>
		</div>
	);
};

export default HotelItemLoader;
