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