// components/FilterSidebar.jsx
import FilterButton from './filterButton'

export default function FilterSidebar({ filterMap, filterTypes }) {
  
  let i = 0;
    return (
    <div className="flex flex-col border-[0.6px] border-umainstroke bg-umainwhite rounded-[10px] w-[239px] h-[764px]">
        <h2 className="text-lg font-semibold w-[49px] h-[24px]-">Filter</h2>

        {filterTypes.map((filter, index) => (
            <div key={index} className="flex flex-col w-auto h-auto mb-2">
                <h1>{filter}</h1>
                {filterMap.get(filter).map((category, i) => (
                    <FilterButton key={i} filterOption={category} className=''/>

                ))}

                
            </div>
        ))}
      
    </div>
  );
}
