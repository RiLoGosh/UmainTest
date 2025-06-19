// components/FilterSidebar.jsx
import FilterButton from './filterButton';

export default function FilterSidebar({
  filterMap,
  filterTypes,
  toggleCategory,
  toggleDeliveryTime,
  togglePrice,
  selectedCategories,
  selectedPrices,
  selectedDeliveryTimes
}) {
  return (
    <div className="flex flex-col border-[0.6px] border-umainstroke bg-umainwhite rounded-[10px] w-[239px] h-[764px]">
      <h2 className="text-lg text-[24px] p-4 font-semibold">Filter</h2>

      <div className="pt-6 gap-5">
        {filterTypes.map((filter, index) => (
          <div
            key={index}
            className={`${
              index === 0 ? 'flex flex-col gap-[10px]' : 'flex flex-row flex-wrap gap-[16px]'
            } w-auto h-auto mb-2 p-4`}
          >
            <h1 className="w-full h-auto text-[12px] uppercase opacity-40 font-bold">
              {filter}
            </h1>

            {filterMap.get(filter).map((category, i) => {
              const isSelected =
                index === 0
                  ? selectedCategories.includes(category)
                  : index === 1
                  ? selectedDeliveryTimes.includes(category)
                  : selectedPrices.includes(category);

              const filterFunction =
                index === 0
                  ? toggleCategory
                  : index === 1
                  ? toggleDeliveryTime
                  : togglePrice;

              return (
                <FilterButton
                  key={i}
                  filterOption={category}
                  filterFunction={() => filterFunction(category)}
                  isSelected={isSelected}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
