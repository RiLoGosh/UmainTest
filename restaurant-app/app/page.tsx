// app/restaurants/page.jsx
import { PROXY_URL } from './apiConfig';
import RestaurantList from './components/restaurantList';

export default async function RestaurantsPage() {
  const res = await fetch(PROXY_URL + "/restaurants", {
    cache: 'no-store' // or 'force-cache' or 'revalidate: 60' if needed
  });

  

  const data = await res.json();

  return <RestaurantList restaurants={data.restaurants} />;
}

