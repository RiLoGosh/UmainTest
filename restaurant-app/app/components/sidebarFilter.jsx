// components/FilterSidebar.jsx
import FilterButton from './filterButton'

export default function FilterSidebar({ filterMap, filterTypes }) {
  

    return (
        
        <div className="flex flex-col border-[0.6px] border-umainstroke bg-umainwhite rounded-[10px] w-[239px] h-[764px]">
            <h2 className="text-lg font-semibold w-[49px] h-[24px]">Filter</h2>
            <div>
                {filterTypes.map((filter, index) => (
                    <div
                        key={index}
                        className={`${
                            index === 0 ? 'flex flex-col gap-[10px]' : 'flex flex-row flex-wrap gap-[16px]'
                        } w-auto h-auto mb-2`}
                    >
                        <h1 className="w-full">{filter}</h1>
                        {filterMap.get(filter).map((category, i) => (
                            <FilterButton key={i} filterOption={category} className="" />
                        ))}
                    </div>
                ))}
            </div>
        </div>

  );
}
