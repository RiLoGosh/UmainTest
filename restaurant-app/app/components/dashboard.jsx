"use client";

import { useState, useEffect } from 'react';
import RestaurantList from './restaurantList';
import OverheadBar from './overheadBar';
import Image from 'next/image';
import FilterSidebar from './sidebarFilter';
import { filterRestaurants, filterTypes } from '../utilities/filtering';

export default function Dashboard({ enrichedRestaurants, filterMap, filterData }) {
    const [selectedCategories, setCategory] = useState([]);
    const [selectedDeliveryTimes, setDeliveryTime] = useState([]);
    const [selectedPrices, setPrice] = useState([]);

    const filters = {
        foodCategory: selectedCategories,
        deliveryTime: selectedDeliveryTimes,
        priceRange: selectedPrices,
    };

    useEffect(() => {
        console.log('Filters changed:', {
        selectedCategories,
        selectedDeliveryTimes,
        selectedPrices,
    });
    }, [selectedCategories, selectedDeliveryTimes, selectedPrices]);


    // #TODO Move these three functions to helpers.jsx
    const toggleCategory = (category) => {
        setCategory(prev =>
            prev.includes(category)
            ? prev.filter(c => c !== category) // remove
            : [...prev, category]              // add
        );
    };

    const toggleDeliveryTime = (time) => {
        setDeliveryTime(prev =>
            prev.includes(time)
            ? prev.filter(t => t !== time)
            : [...prev, time]
        );
    };

    const togglePrice = (price) => {
        setPrice(prev =>
            prev.includes(price)
            ? prev.filter(p => p !== price)
            : [...prev, price]
        );
    };



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
                    toggleCategory={toggleCategory} 
                    toggleDeliveryTime={toggleDeliveryTime}
                    togglePrice={togglePrice}
                    selectedCategories={selectedCategories}
                    selectedDeliveryTimes={selectedDeliveryTimes}
                    selectedPrices={selectedPrices}
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
