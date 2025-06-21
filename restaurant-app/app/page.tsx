// app/restaurants/page.jsx

import { fetchRestaurants, fetchFilters } from './utilities/api';
import { buildFilterMap } from './utilities/filtering';
import { enrichRestaurantData } from './utilities/helpers';
import Dashboard from './components/dashboard'; 

export default async function RestaurantsPage() {

  // Perform API fetching
  const resData = await fetchRestaurants();
  const filterData = await fetchFilters();
  const filterMap = buildFilterMap(filterData);

  // Enrich restaurant data with foodCategory and priceRange entries (more API calls :( ))
  const enrichedRestaurants = await enrichRestaurantData(resData.restaurants);

  return (
    <Dashboard
      enrichedRestaurants={enrichedRestaurants}
      filterData={filterData}
      filterMap={filterMap}
    />
  );
}
