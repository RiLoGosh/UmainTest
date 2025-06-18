
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

        const matchesCategory = foodCategory
        ? restaurant.foodCategory?.includes(foodCategory)
        : true;

        const matchesDelivery = maxDeliveryTime
        ? restaurant.deliveryTime <= maxDeliveryTime
        : true;

        const matchesPrice = priceRange
        ? restaurant.priceRange === priceRange
        : true;

        

        return matchesCategory && matchesDelivery && matchesPrice;
  });
}


