"use client";
import RestaurantCard from "./restaurantCard";


export default function RestaurantList({ restaurants }) {
  return (
    
    <div className='grid grid-cols-3 gap-[17px] top-[336px] left-[299px] overflow-y-scroll'>
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
   
  );
}
