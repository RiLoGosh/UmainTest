"use client";
import RestaurantCard from "./restaurantCard";


export default function RestaurantList({ restaurants }) {
  return (
    
  	<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
		{restaurants.map((restaurant) => (
			<RestaurantCard key={restaurant.id} restaurant={restaurant} />
		))}
	</div>
   
  );
}
