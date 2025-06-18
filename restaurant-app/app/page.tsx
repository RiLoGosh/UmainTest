// app/restaurants/page.jsx

import { fetchRestaurants, fetchFilters } from './utilities/api';
import { buildFilterMap } from './utilities/filtering';
import { enrichRestaurantData } from './utilities/helpers';
import Dashboard from './components/dashboard'; // new client component

export default async function RestaurantsPage() {
  const resData = await fetchRestaurants();
  const filterData = await fetchFilters();
  const filterMap = buildFilterMap(filterData);
  const enrichedRestaurants = await enrichRestaurantData(resData.restaurants);

  return (
    <Dashboard
      enrichedRestaurants={enrichedRestaurants}
      filterData={filterData}
      filterMap={filterMap}
    />
  );
}
