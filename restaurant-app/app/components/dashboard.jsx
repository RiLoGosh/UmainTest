"use client";

import { useState, useEffect } from 'react';
import RestaurantList from './restaurantList';
import OverheadBar from './overheadBar';
import MiniOverheadBar from './miniOverheadBar'
import Image from 'next/image';
import FilterSidebar from './sidebarFilter';
import { filterRestaurants, filterTypes, deliveryTimes } from '../utilities/filtering';
import { toggleCategory, toggleDeliveryTime, togglePrice } from '../utilities/helpers';
import MobileWelcomeScreen from './mobileWelcomeScreen'

export default function Dashboard({ enrichedRestaurants, filterMap, filterData }) {
    
    // We make three state variables using the useState hook to maintain a collection of selected filters
    const [selectedCategories, setCategory] = useState([]);
    const [selectedDeliveryTimes, setDeliveryTime] = useState([]);
    const [selectedPrices, setPrice] = useState([]);

    const [showWelcome, setShowWelcome] = useState(false);
    
    // Will check on load
    useEffect(() => {
        const isMobile = window.innerWidth < 640; 
        if (isMobile) {
            setShowWelcome(true);
        }
    }, []);

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

    if (showWelcome) {
        return <MobileWelcomeScreen 
                onContinue={() => setShowWelcome(false)} 
        />;
    }
    return (
        <div className='px-4 pt-10'>
            {/* Top - Munchies Title */}
            <div className="relative w-50 flex justify-start px-4 pt-10
                             sm:flex sm:w-100  sm:left-[40px] sm:p-10">
                <Image 
                src="/Munchies.png"
                width={273.42}
                height={40}
                alt=""
                />
            </div>

            {/* Content area - Sidebar + Main Content */}
            <div className="flex flex-col sm:flex-row bg-umainoffwhite">
                {/* Sidebar */}
                <aside className="hidden sm:block px-[24px] pb-[24px]">
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
                    <div className='sm:hidden'>
                        <MiniOverheadBar
                        className='sm:hidden'
                        title="Delivery Time"
                        filterOptions={deliveryTimes}
                        filterFunction={(time) => toggleDeliveryTime(time, setDeliveryTime)}
                        currentlySelected={selectedDeliveryTimes} 
                        />
                    </div>
                    
                    {/* Overhead Bar */}
                    <div className="">
                        <OverheadBar 
                        filters={filterData.filters} 
                        toggleCategory={(category) => toggleCategory(category, setCategory)} 
                        selectedCategories={selectedCategories}
                        />
                    </div>

                    <h1 className='text-3xl pt-6 pb-4 sm:w-[200px] sm:h-[40px] sm:text-[40px] sm:pt-6'>
                        Restaurants
                    </h1>

                    {/* Restaurant List */}
                    <div className="w-full sm:w-full sm:h-auto sm:py-15">
                        <RestaurantList restaurants={filteredRestaurants} />
                    </div>
                </main>
            </div>
        </div>
    );
    }
