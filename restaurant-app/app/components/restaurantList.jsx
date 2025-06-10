"use client";
import RestaurantCard from "./restaurantCard";


export default function RestaurantList({ restaurants }) {
  return (
    <div>
      <h1>Restaurants</h1>
      <div className='flex flex-wrap max-h-screen overflow-y-auto'>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}
