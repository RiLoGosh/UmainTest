"use client";

import FilterButton from './filterButton';

export default function MiniOverheadBar({ filterOptions, filterFunction, currentlySelected }) {
  
	return (
	<div className="flex overflow-scroll gap-x-[10px] w-auto h-auto">
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
);
}
