
export const filterTypes = ["Food Category", "Delivery Time", "Price Range"];
export const deliveryTimes = ["0-10 min", "10-30 min", "30-60 min", "1 hour+"];
export const priceRanges = ["$", "$$", "$$$", "$$$$"];

// Simple filter map to contain the category and filter options. Mainly used for presenting the data easily
export function buildFilterMap(filterData) {
  
    const foodCategories = filterData.filters.map((f) => f.name);

    const filterMap = new Map();
    filterMap.set(filterTypes[0], foodCategories);
    filterMap.set(filterTypes[1], deliveryTimes);
    filterMap.set(filterTypes[2], priceRanges);

    return filterMap;
}

// Dictionary for the various delivery time ranges. Easy to add more time options
const deliveryRanges = {
    "0-10 min": [0, 10],
    "10-30 min": [10, 30],
    "30-60 min": [30, 60],
    "1 hour+": [60, Infinity],
};

// Function that creates and returns the restaurants among enrichedRestaurants that fulfill the given filters.
export function filterRestaurants(enrichedRestaurants, filters){
    return enrichedRestaurants.filter((restaurant) => {
        const { foodCategory, priceRange, deliveryTime } = filters;

        // foodCategory: match ANY selected food category
        const matchesCategory = Array.isArray(foodCategory) && foodCategory.length > 0
            ? foodCategory.some((selectedCategory) =>
                restaurant.foodCategory?.includes(selectedCategory)
                )
            : true;

        // deliveryTime: match ANY restaurant if delivery time is inside any selected range
        const matchesDelivery = Array.isArray(deliveryTime) && deliveryTime.length > 0
            ? deliveryTime.some((rangeLabel) => {
                let min = 0;
                let max = Infinity;

                // Switch matches the saved string, returns range from the dictionary
                switch (rangeLabel) {
                    case "0-10 min":
                    case "10-30 min":
                    case "30-60 min":
                    case "1 hour+":
                    [min, max] = deliveryRanges[rangeLabel];
                    break;
                    default:
                    return false; // Can't match label, return false
                }

                // Give true for restaurant if within given delivery time range
                return (
                    restaurant.delivery_time_minutes >= min &&
                    restaurant.delivery_time_minutes <= max
                    );
                })
            : true;


        // priceRange: match ANY of the selected price ranges
        const matchesPrice = Array.isArray(priceRange) && priceRange.length > 0
            ? priceRange.includes(restaurant.priceRange)
            : true;

        

        // Return this restaurant if foodCategory, deliveryTime, and priceRange match
        return matchesCategory && matchesDelivery && matchesPrice;
  });
}


