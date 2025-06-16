import { fetchFilterId, fetchPrice} from "./api";


export const enrichRestaurantData = async (restaurantData) => {
  if (!Array.isArray(restaurantData)) {
    console.error("Expected restaurantData to be an array but got:", restaurantData);
    return [];
  }

  const enriched = await Promise.all(
    restaurantData.map(async (restaurant) => {
      try {
        // 🔹 Fetch all filter names
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

        // 🔹 Fetch price range for this restaurant
        let priceRange;
        try {
          const priceData = await fetchPrice(restaurant.price_range_id);
          priceRange = priceData.range ?? 'Unknown';
        } catch (error) {
          console.error(`Error fetching price for restaurant ID ${restaurant.id}:`, error);
          priceRange = 'Unknown';
        }

        // 🔹 Return enriched restaurant object
        return {
          ...restaurant,
          foodCategory: filterResponses,
          priceRange: priceRange
        };

      } catch (error) {
        console.error(`Error processing restaurant: ${restaurant.name}`, error);
        return {
          ...restaurant,
          foodCategory: ['Unknown'],
          priceRange: 'Unknown'
        };
      }
    })
  );

  return enriched;
};