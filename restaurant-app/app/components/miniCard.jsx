"use client";

export default function MiniCard({ name, image }) {
  return (
    <div
      className=" flex items-center justify-between border-1 flex-shrink-0 w-48 h-20 p-2 mr-2 rounded-lg shadow bg-white"
    >
      <div className="text-sm font-medium truncate w-24">{name}</div>
      <img
        src={image}
        alt=""
        className="w-12 h-12 object-contain rounded"
      />
    </div>
  );
}
