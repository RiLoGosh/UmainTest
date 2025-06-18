
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

export function filterRestaurants(enrichedRestaurants, filters){
    console.log("filtering...")
    return enrichedRestaurants.filter((restaurant) => {
        const { foodCategory, priceRange, maxDeliveryTime } = filters;

        // ✅ foodCategory: require ALL selected categories to be present
        const matchesCategory = Array.isArray(foodCategory) && foodCategory.length > 0
            ? foodCategory.every((selectedCategory) =>
                restaurant.foodCategory?.includes(selectedCategory)
                )
            : true;

        // ✅ deliveryTime: match if restaurant time is <= selected max
        const matchesDelivery = typeof maxDeliveryTime === "number"
            ? restaurant.deliveryTime <= maxDeliveryTime
            : true;

        // ✅ priceRange: match ANY of the selected price ranges
        const matchesPrice = Array.isArray(priceRange) && priceRange.length > 0
            ? priceRange.includes(restaurant.priceRange)
            : true;

        

        return matchesCategory && matchesDelivery && matchesPrice;
  });
}


