"use client";
import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react'; 

const RestaurantCard = ({ restaurant }) => {

	const isOpen = restaurant.isOpen;

	// Sadly no API call for getting opening time so this will only match default value
	// #TODO: Update API call and create this attribute
	const openMessage = restaurant.openingTime || 'No Opening Time Info Available'; 

	return (
		<div className={`
			flex flex-col justify-between rounded-2xl shadow-md p-4 w-full h-60 transition duration-300 relative overflow-hidden
			${isOpen ? 'bg-white text-black' : 'bg-gray-100 text-gray-400'}
		`}>
			{/* Status */}
			<div className="flex gap-2">
				<span className="flex items-center gap-1 bg-white border text-sm px-3 py-1 rounded-full">
					<span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-600' : 'bg-black'}`} />
					{isOpen ? 'Open' : 'Closed'}
				</span>
				{/* Delivery Time */}
				{isOpen && (
					<span className="bg-white border text-sm px-3 py-1 rounded-full">
						{restaurant.delivery_time_minutes} min
					</span>
				)}
			</div>

			{/* Food Image */}
			<div className={`absolute -top-6 -right-4 w-[140px] h-[140px] ${!isOpen ? 'opacity-20' : ''}`}>
				<Image
					src={restaurant.image_url}
					alt="Restaurant"
					layout="fill"
					objectFit="contain"
					priority
				/>
			</div>

			{/* Closed Message */}
			{!isOpen && openMessage && (
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border rounded-md px-4 py-2 text-black text-sm shadow-sm">
					{openMessage}
				</div>
			)}

			{/* Restaurant Name */}
			<div className="mt-10">
				<h2 className={` truncate text-xl font-medium ${isOpen ? 'text-black' : 'text-gray-300'}`}>
					{restaurant.name}
				</h2>
			</div>

			{/* Arrow Button */}
			<div className="absolute bottom-4 right-4">
				<button
					disabled={!isOpen}
					className={`p-3 rounded-full transition
						${isOpen ? 'bg-green-700 text-white hover:bg-green-800' : 'bg-gray-300 text-gray-200 cursor-not-allowed'}
					`}>
					<ArrowRight size={20} />
				</button>
			</div>
		</div>
	);
};

export default RestaurantCard;
