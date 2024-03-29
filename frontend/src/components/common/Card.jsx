import React from "react";

const Card = (props) => {
	return (
		<div className={`${props.divWidth} mt-5 mx-auto`}>
			<a href={props.link} target="_blank" rel="noreferrer">
				<img
					src={props.img}
					alt="location"
					className={`${props.imgWidth} ${props.imgHeight} rounded-sm hover:opacity-80`}
				/>
				<div className="text-start">
					<p className="pt-3 font-bold text-base">{props.title}</p>
					{props.heading === "Homes Guests Love" ? (
						""
					) : (
						<p className="text-sm text-textLight">
							{`${
								props.propertyCount > 0
									? props.propertyCount + " properties"
									: "0 properties"
							}`}
						</p>
					)}
				</div>
			</a>
		</div>
	);
};

export default Card;
