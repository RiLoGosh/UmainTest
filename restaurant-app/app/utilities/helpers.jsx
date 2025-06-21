import { fetchFilterId, fetchPrice, fetchOpenStatus} from "./api";

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

			// Fetch open status
			let isOpen = false;
			try {
			isOpen = await fetchOpenStatus(restaurant.id);
			} catch (error) {
			console.error(`Error fetching open status for restaurant ID ${restaurant.id}:`, error);
			isOpen = false;
			}

			// Fetch price range 
			let priceRange;
			try {
			const priceData = await fetchPrice(restaurant.price_range_id);
			priceRange = priceData.range ?? 'Unknown';
			} catch (error) {
			console.error(`Error fetching price for restaurant ID ${restaurant.id}:`, error);
			priceRange = 'Unknown';
			}

			// Return restaurant with 3 new fields: foodCategory, priceRange, and isOpen 
			return {
			...restaurant,
			foodCategory: filterResponses,
			priceRange,
			isOpen
			};

		} catch (error) {
			console.error(`Error processing restaurant: ${restaurant.name}`, error);
			return {
			...restaurant,
			foodCategory: ['Unknown'],
			priceRange: 'Unknown',
			isOpen: false
			};
		}
		})
	);

	// Sort restaurants by open --> closed
	enriched.sort((a, b) => (b.isOpen === true) - (a.isOpen === true));

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