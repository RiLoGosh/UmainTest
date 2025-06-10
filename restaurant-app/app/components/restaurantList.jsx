// app/restaurants/RestaurantList.jsx
"use client";
import RestaurantCard from "./restaurantCard";


export default function RestaurantList({ restaurants }) {
  return (
    <div>
      <h1>Restaurants</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}
