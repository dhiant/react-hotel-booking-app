import React from "react";
import Button from "./common/Button";
import { BiChevronRight } from "react-icons/bi";

const HotelItem = ({ hotelDetail }) => {
	return (
		<div className="max-w-3xl px-2 py-3 border-2 border-border flex relative">
			<img
				src={hotelDetail?.photos[0]}
				alt="a hotel room with two bed and two lamps located in Kathmandu Nepal"
				className="w-40 h-40 sm:w-56 sm:h-48"
			/>
			{/* Hotel Name and other details */}
			<div className="mt-2 px-2">
				<div className="md:flex">
					<h1 className="text-xl font-bold text-secondary hover:text-highlight">
						{hotelDetail.name}
					</h1>
					{/* <span className="flex items-center px-2">
						<IoIosStar className="w-5 h-5 fill-highlight" />
						<IoIosStar className="w-5 h-5 fill-highlight" />
						<IoIosStar className="w-5 h-5 fill-highlight" />
						<AiFillLike className="w-5 h-5 fill-highlight" />
					</span> */}
				</div>
				<div className="">
					<p className="text-xs text-secondary font-semibold underline">
						{hotelDetail.address}
						{/* <span className="px-3">Show on map</span> */}
						<span className="no-underline text-black hidden xs:block">
							{hotelDetail.distance}
						</span>
					</p>
					{/* <p className="text-xs hidden xs:flex items-center gap-1.5 mt-2">
						<i>
							<RiLeafLine className="w-4 h-4" />
						</i>
						Travel Sustainable Property
					</p> */}
				</div>
				<div className="hidden sm:flex flex-col mt-2 pl-4">
					<h1 className="text-md font-bold">{hotelDetail.type}</h1>
					<p className="text-xs">{hotelDetail.desc}</p>
					<h1 className="text-xs font-bold text-[#008009] mt-2">
						Breakfast included
					</h1>
				</div>
			</div>
			{/* Reviews and Costs */}
			<div className="pl-1 pr-2">
				{/* reviews box */}
				<div className="md:ml-2 mt-1 hidden sm:block">
					<div className="flex gap-1">
						<div>
							<h1 className="text-sm font-semibold">Review Score</h1>
							<p className="text-xs text-textLight">
								{hotelDetail.reviews} reviews
							</p>
						</div>

						<div className="text-white text-base p-4 font-medium w-[28px] h-[28px] bg-primary flex items-center justify-center rounded-t-md rounded-r-md rounded-br-md rounded-bl-none">
							{hotelDetail.rating}
						</div>
					</div>
					{/* <h1 className="text-sm font-bold text-secondary mt-1 xl:ml-8">
						Comfort 8.2
					</h1> */}
				</div>
				{/* Cost */}
				<div className="hidden md:flex flex-col mt-3">
					{/* <p className="text-xs text-textLight text-right">
						8 nights, 2 adults
					</p> */}
					<h1 className="text-xl text-[#ff8000] font-bold text-right">
						NPR {hotelDetail.cheapestPrice}
					</h1>
					<p className="text-xs text-textLight text-right">
						Include taxes and charges
					</p>
					<div className="mt-3 relative">
						<Button text="Explore" padding="px-4 py-3 pr-10" />
						<BiChevronRight className="absolute top-[10px] right-3 w-5 h-5 text-white" />
					</div>
				</div>
				<div className="block md:hidden absolute bottom-1 xs:bottom-2 right-3">
					<Button text="Explore" padding="px-6 py-2" />
				</div>
			</div>
		</div>
	);
};

export default HotelItem;
