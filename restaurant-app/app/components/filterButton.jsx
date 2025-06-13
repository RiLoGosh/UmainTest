

export default function FilterButton({ filterOption }){


    return (
        <div className="w-auto h-auto rounded-[8px] py-[8px] px-[12px] gap-[8px] border-solid border-umainstroke border-[0.6px]">
            <button>
                {filterOption}
            </button>
        </div>
    )
}