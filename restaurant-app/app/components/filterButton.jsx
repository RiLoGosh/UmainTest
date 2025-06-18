

export default function FilterButton({ filterOption, filterFunction }){


    return (
        <div
        onClick={() => filterFunction(filterOption)}
        className="cursor-pointer hover:bg-umainstroke w-auto h-auto rounded-[8px] py-[8px] px-[12px] border-solid border-umainstroke border-[0.6px] text-[12px]">
            {filterOption}
        </div>
    )
}