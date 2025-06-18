// components/FilterSidebar.jsx
import FilterButton from './filterButton'

export default function FilterSidebar({ filterMap, filterTypes, setCategory, setPrice, setDeliveryTime}) {
  

    return (
        
        <div className="flex flex-col border-[0.6px] border-umainstroke bg-umainwhite rounded-[10px] w-[239px] h-[764px]">
            <h2 className="text-lg text-[24px] p-4 font-semibold w-[49px] h-[24px]">Filter</h2>
            <div className='pt-6 gap-5'>
                {filterTypes.map((filter, index) => (
                    <div
                        key={index}
                        // For the first category, we make a column of options, for others they are wrapped rows
                        className={`${
                            index === 0 ? 'flex flex-col gap-[10px]' : 'flex flex-row flex-wrap gap-[16px]'
                        } w-auto h-auto mb-2 p-4`}
                    >
                        <h1
                            className={`w-full h-auto text-[12px] uppercase opacity-40 font-bold
                                ${index === 0 ? "" : ""}`}
                            >
                            {filter}
                        </h1>
                        {filterMap.get(filter).map((category, i) => (
                            <FilterButton 
                            key={i} 
                            filterOption={category} 
                            className=""
                            {...
                                (index === 0
                                ? { filterFunction: setCategory }
                                : index === 1
                                ? { filterFunction: setPrice }
                                : { filterFunction: setDeliveryTime })
                            }
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>

  );
}
