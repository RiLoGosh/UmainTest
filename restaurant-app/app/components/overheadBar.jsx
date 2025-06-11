"use client";

import MiniCard from './miniCard';

export default function OverheadBar({ filters }) {
  return (
    <header className="">
      <div className="flex overflow-scroll w-full gap-x-3">
        {filters.map((filter) => (
          <MiniCard key={filter.id} name={filter.name} image={filter.image_url} />
        ))}
      </div>
    </header>
  );
}
