"use client";
import Image from "next/image";

export default function MiniCard({ name, image, filterFunction, isSelected }) {
  return (
    <div className={`cursor-pointer hover:bg-umainstroke flex rounded-[8px] border-solid border-umainstroke border-[0.6px] shadow
		${isSelected ? "bg-gray-300 text-gray-600 cursor-not-allowed" : "bg-white hover:bg-gray-100"}`}
		onClick={() => filterFunction(name)}>
        
        <div className="text-[14px] w-[77px] h-[14px] top-[16px] left-[12px] p-3">
          	{name}
        </div>
        <Image className="left-[90px]"
			src={image}
			alt=""
			width={80}
			height={80}
        />
    </div>
  );
}
