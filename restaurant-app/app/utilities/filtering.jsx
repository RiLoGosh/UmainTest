
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
    return enrichedRestaurants.filter((restaurant) => {
        const { foodCategory, priceRange, deliveryTime } = filters;
        console.log(priceRange);

        // ✅ foodCategory: require ALL selected categories to be present
        const matchesCategory = Array.isArray(foodCategory) && foodCategory.length > 0
            ? foodCategory.some((selectedCategory) =>
                restaurant.foodCategory?.includes(selectedCategory)
                )
            : true;

        // ✅ deliveryTime: match if restaurant's time is inside any selected range
        const matchesDelivery = Array.isArray(deliveryTime) && deliveryTime.length > 0
            ? deliveryTime.some((rangeString) => {
                const cleaned = rangeString.replace(" min", "").trim(); // remove "min"
                const [min, max] = cleaned.split("-").map(Number);
                console.log("cleaned: " + cleaned);
                return restaurant.delivery_time_minutes >= min && restaurant.delivery_time_minutes <= max;
            })
            : true;


        // ✅ priceRange: match ANY of the selected price ranges
        const matchesPrice = Array.isArray(priceRange) && priceRange.length > 0
            ? priceRange.includes(restaurant.priceRange)
            : true;

        

        return matchesCategory && matchesDelivery && matchesPrice;
  });
}


