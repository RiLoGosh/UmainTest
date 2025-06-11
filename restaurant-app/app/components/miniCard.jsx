"use client";
import Image from "next/image";

export default function MiniCard({ name, image }) {
  return (
    <div className="flex rounded-[8px] border-solid border-umainstroke border-[0.6px] w-[160px] h-[80px] shadow bg-umainwhite">
        
        <div className="text-[14px] w-[77px] h-[14px] top-[16px] left-[12px] p-3">{name}</div>
        <Image className="left-[90px]"
            src={image}
            alt=""
            width={80}
            height={80}
        />
    </div>
  );
}
