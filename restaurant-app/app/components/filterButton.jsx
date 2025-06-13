

export default function FilterButton({ filterOption }){


    return (
        <div className="w-auto h-auto rounded-[8px] py-[8px] px-[12px]  border-solid border-umainstroke border-[0.6px]">
            <button className="text-[12px]">
                {filterOption}
            </button>
        </div>
    )
}