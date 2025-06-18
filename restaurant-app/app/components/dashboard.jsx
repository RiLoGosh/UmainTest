"use client";

import { useState, useEffect } from 'react';
import RestaurantList from './restaurantList';
import OverheadBar from './overheadBar';
import Image from 'next/image';
import FilterSidebar from './sidebarFilter';
import { filterRestaurants, filterTypes } from '../utilities/filtering';

export default function Dashboard({ enrichedRestaurants, filterMap, filterData }) {
  const [selectedCategory, setCategory] = useState(null);
  const [maxDeliveryTime, setDeliveryTime] = useState(null);
  const [selectedPrice, setPrice] = useState(null);

  const filters = {
    foodCategory: selectedCategory,
    maxDeliveryTime: maxDeliveryTime,
    priceRange: selectedPrice,
  };

  useEffect(() => {
  console.log('Filters changed:', {
    selectedCategory,
    maxDeliveryTime,
    selectedPrice,
  });
}, [selectedCategory, maxDeliveryTime, selectedPrice]);

  const filteredRestaurants = filterRestaurants(enrichedRestaurants, filters);

  return (
    <div>
      {/* Top - Munchies Title */}
      <div className="flex top-[56px] left-[40px] p-10 bg-umainoffwhite ">
        <Image 
          src="/Munchies.png"
          width={273.42}
          height={40}
          alt=""
        />
      </div>

      {/* Content area - Sidebar + Main Content */}
      <div className="flex bg-umainoffwhite">
        {/* Sidebar */}
        <div className="bg-umainoffwhite px-[24px] pb-[24px] top-[144px] left-[40px] ">
          <FilterSidebar 
            filterMap={filterMap} 
            filterTypes={filterTypes} 
            setCategory={setCategory} 
            setDeliveryTime={setDeliveryTime}
            setPrice={setPrice}
          />
        </div>

        {/* Main content */}
        <main className='flex flex-col'>
          {/* Overhead Bar */}
          <div className="top-[144px] left-[299px]">
            <OverheadBar filters={filterData.filters} />
          </div>

          <h1 className='w-[200px] h-[40px] top-[264px] left-[299px] text-[40px] pt-6'>
              Restaurants
          </h1>

          {/* Restaurant List */}
          <div className="w-[1015px] h-auto py-15">
            <RestaurantList restaurants={filteredRestaurants} />
          </div>
        </main>
      </div>
    </div>
  );
}
