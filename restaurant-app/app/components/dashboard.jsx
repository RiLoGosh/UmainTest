"use client";

import { useState, useEffect } from 'react';
import RestaurantList from './restaurantList';
import OverheadBar from './overheadBar';
import MiniOverheadBar from './miniOverheadBar'
import Image from 'next/image';
import FilterSidebar from './sidebarFilter';
import { filterRestaurants, filterTypes, deliveryTimes } from '../utilities/filtering';
import { toggleCategory, toggleDeliveryTime, togglePrice } from '../utilities/helpers';

export default function Dashboard({ enrichedRestaurants, filterMap, filterData }) {
    
    // We make three state variables using the useState hook to maintain a collection of selected filters
    const [selectedCategories, setCategory] = useState([]);
    const [selectedDeliveryTimes, setDeliveryTime] = useState([]);
    const [selectedPrices, setPrice] = useState([]);

    // filters object holds complete collection of selected filters
    const filters = {
        foodCategory: selectedCategories,
        deliveryTime: selectedDeliveryTimes,
        priceRange: selectedPrices,
    };

    // useful for debugging, reports current filter collection upon state change
    useEffect(() => {
        console.log('Filters changed:', {
        selectedCategories,
        selectedDeliveryTimes,
        selectedPrices,
    });
    }, [selectedCategories, selectedDeliveryTimes, selectedPrices]);

    // Make object consisting of all the restaurants that fulfill the selected filters
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
            <div className="flex flex-col lg:flex-row bg-umainoffwhite">
                {/* Sidebar */}
                <aside className="hidden lg:block bg-umainoffwhite px-[24px] pb-[24px] top-[144px] left-[40px] ">
                <FilterSidebar 
                    filterMap={filterMap} 
                    filterTypes={filterTypes} 
                    toggleCategory={(category) => toggleCategory(category, setCategory)} 
                    toggleDeliveryTime={(time) => toggleDeliveryTime(time, setDeliveryTime)}
                    togglePrice={(price) => togglePrice(price, setPrice)}
                    selectedCategories={selectedCategories}
                    selectedDeliveryTimes={selectedDeliveryTimes}
                    selectedPrices={selectedPrices}
                    />
                </aside>

                {/* Main content */}
                <main className='flex flex-col'>
                    {/* Smaller additional mobile view overhead bar */}
                    <div className='lg:hidden'>
                        <MiniOverheadBar
                        className='lg:hidden'
                        filterOptions={deliveryTimes}
                        filterFunction={(time) => toggleDeliveryTime(time, setDeliveryTime)}
                        currentlySelected={selectedDeliveryTimes} 
                        />
                    </div>
                    
                    {/* Overhead Bar */}
                    <div className="top-[144px] left-[299px]">
                        <OverheadBar 
                        filters={filterData.filters} 
                        toggleCategory={(category) => toggleCategory(category, setCategory)} 
                        selectedCategories={selectedCategories}
                        />
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
