"use client";
import Image from "next/image";

export default function MiniCard({ name, image }) {
  return (
    <div
      className=" flex items-center justify-between border-1 flex-shrink-0 w-48 h-20 p-2 mr-2 rounded-lg shadow bg-umainwhite"
    >
      <div className="text-sm font-medium truncate w-24">{name}</div>
      <Image
        src={image}
        alt=""
        width={50}
        height={50}
      />
    </div>
  );
}
