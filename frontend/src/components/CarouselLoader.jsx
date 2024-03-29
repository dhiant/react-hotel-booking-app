import React from "react";
import ContentLoader from "react-content-loader";
import { v4 as uuidv4 } from "uuid";

const CarouselLoader = ({
	contentLoaderWidth,
	contentLoaderHeight,
	rectData,
	rectWidth,
	rectHeight,
}) => {
	return (
		<div className="overflow-x-scroll lg:overflow-hidden">
			<ContentLoader
				viewBox={`0 0 ${contentLoaderWidth} ${contentLoaderHeight}`}
				speed={2}
				width={contentLoaderWidth}
				height={contentLoaderHeight}
				backgroundColor="#e7e7e7"
				foregroundColor="#bab5b5"
			>
				{rectData.map((rect) => (
					<React.Fragment key={uuidv4()}>
						<rect
							x={rect.x}
							y={rect.y}
							rx="0"
							ry="0"
							width={rectWidth}
							height={rectHeight}
						/>
					</React.Fragment>
				))}
			</ContentLoader>
		</div>
	);
};

export default CarouselLoader;
