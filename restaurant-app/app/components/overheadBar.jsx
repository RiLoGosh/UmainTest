"use client";

import MiniCard from './miniCard';

export default function OverheadBar({ filters, toggleCategory, selectedCategories }) {
	return (
		<div className="w-full overflow-x-auto py-4 px-4">
			<div className="flex gap-3 w-max">
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
		</div>
	);
}
