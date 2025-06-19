"use client";

import MiniCard from './miniCard';

export default function OverheadBar({ filters, toggleCategory, selectedCategories }) {
  
	return (
	<div className="flex overflow-scroll gap-x-[10px] w-auto h-auto">
		{filters.map((filter) => {

		const isSelected = selectedCategories.includes(filter.name);

		return (
			<MiniCard 
			key={filter.id} 
			name={filter.name} 
			image={filter.image_url} 
			filterFunction={() => toggleCategory(filter.name)}
			isSelected={isSelected}
			/>
		);
		})}
	</div>
);
}
