"use client";

import MiniCard from './miniCard';

export default function OverheadBar({ filters }) {
  return (
    <header className="bg-white border-b px-4 py-3">
      <h2 className="text-base font-semibold mb-2">Choose a filter</h2>
      <div className="flex overflow-x-auto space-x-2 pb-2">
        {filters.map((filter) => (
          <MiniCard key={filter.id} name={filter.name} image={filter.image_url} />
        ))}
      </div>
    </header>
  );
}
