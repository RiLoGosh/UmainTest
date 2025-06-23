"use client";

import FilterButton from './filterButton';

export default function MiniOverheadBar({ title, filterOptions, filterFunction, currentlySelected }) {
	return (
		<div className="w-full py-4">
			{/* Heading */}
			<h3 className="text-sm font-semibold text-[12px] text-gray-500 uppercase mb-2">{title}</h3>

			{/* Scrollable filter buttons */}
			<div className="flex gap-3 overflow-x-auto w-max">
				{filterOptions.map((filter) => {
				const isSelected = currentlySelected.includes(filter);

				return (
					<FilterButton
					key={filter}
					filterOption={filter}
					filterFunction={() => filterFunction(filter)}
					isSelected={isSelected}
					/>
				);
				})}
			</div>
		</div>
	);
}
