"use client";

import MiniCard from './miniCard';

export default function OverheadBar({ filters }) {
  return (
    
    <div className="flex overflow-scroll gap-x-[10px] w-auto h-auto">
    {filters.map((filter) => (
        <MiniCard key={filter.id} name={filter.name} image={filter.image_url} />
    ))}
    </div>
    
  );
}
