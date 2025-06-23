export default function FilterButton({ filterOption, filterFunction, isSelected }) {
  return (
    <div
      onClick={() => filterFunction(filterOption)}
      className={`inline-block self-start cursor-pointer rounded-[8px] py-[8px] px-[12px] text-[12px] border border-umainstroke
        ${isSelected 
          ? "bg-gray-300 text-gray-600 cursor-not-allowed" 
          : "bg-white hover:bg-gray-100"}`}>
      {filterOption}
    </div>
  );
}
