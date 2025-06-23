"use client";
import RestaurantCard from "./restaurantCard";


export default function RestaurantList({ restaurants }) {
  return (
    
  	<div className="grid grid-cols-1 sm:flex flex-wrap gap-4">
		{restaurants.map((restaurant) => (
			<RestaurantCard key={restaurant.id} restaurant={restaurant} />
		))}
	</div>
   
  );
}
