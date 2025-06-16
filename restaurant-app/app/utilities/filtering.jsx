import { fetchFilterId } from "./api";

export const filterTypes = ["Food Category", "Delivery Time", "Price Range"];
export const deliveryTimes = ["0-10 min", "10-30 min", "30-60 min", "1 hour+"];
export const priceRanges = ["$", "$$", "$$$", "$$$$"];

export function buildFilterMap(filterData) {
  
    const foodCategories = filterData.filters.map((f) => f.name);

    const filterMap = new Map();
    filterMap.set(filterTypes[0], foodCategories);
    filterMap.set(filterTypes[1], deliveryTimes);
    filterMap.set(filterTypes[2], priceRanges);

    return filterMap;
}

export const enrichRestaurantData = async (restaurantData) => {

    // Use promise.all to perform every restaurant addition in parallel
    const enriched = await Promise.all(
        restaurantData.map(async (restaurant) => {

            // Do each filter id check per restaurant in parallel as well
            try {
                const filterResponses = await Promise.all(
                restaurant.filter_ids.map(async (id) => {
                    try {
                    const data = await fetchFilterId(id);
                    return data.name;
                    } catch (error) {
                    console.error(`Error fetching filter for ID ${id}:`, error);
                    return 'Unknown'; 
                    }
                })
                );

                return {
                ...restaurant,
                foodCategory: filterResponses 
                };

            } catch (error) {
                console.error('Error processing restaurant: ' + restaurant.name, error);
                return {
                ...restaurant,
                foodCategory: ['Unknown']
                };
            }
        })
    );

    return enriched;
};