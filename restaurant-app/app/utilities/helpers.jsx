import { fetchFilterId, fetchPrice} from "./api";

// Function for adding two fields to each restaurant object in the collection of restaurants.
// 1. Food Categories
// 2. Price Ranges
export const enrichRestaurantData = async (restaurantData) => {

  // Check for array
  if (!Array.isArray(restaurantData)) {
    console.error("Expected restaurantData to be an array but got:", restaurantData);
    return [];
  }

  const enriched = await Promise.all(
    restaurantData.map(async (restaurant) => {
      try {
        // Fetch filter info for identifying food category
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

        // Fetch price range 
        let priceRange;
        try {
          const priceData = await fetchPrice(restaurant.price_range_id);
          priceRange = priceData.range ?? 'Unknown';
        } catch (error) {
          console.error(`Error fetching price for restaurant ID ${restaurant.id}:`, error);
          priceRange = 'Unknown';
        }

        // Return restaurant with 2 new fields: foodCategory and priceRange
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

// 3 toggle functions for either adding a given filter option to the list of selected filters or removing it

// Food Category
export const toggleCategory = (category, setCategory) => {
    setCategory(prev =>
        prev.includes(category)
            ? prev.filter(c => c !== category)
            : [...prev, category]
    );
};

// Delivery Time
export const toggleDeliveryTime = (time, setDeliveryTime) => {
    setDeliveryTime(prev =>
        prev.includes(time)
            ? prev.filter(t => t !== time)
            : [...prev, time]
    );
};

// Price Range
export const togglePrice = (price, setPrice) => {
    setPrice(prev =>
        prev.includes(price)
            ? prev.filter(p => p !== price)
            : [...prev, price]
    );
};