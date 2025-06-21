"use client";
import React from 'react';
import { PROXY_URL } from '../utilities/apiConfig';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { fetchOpenStatus } from '@/utilities/api';


const RestaurantCard = ({ restaurant }) => {

  return (
    <div className='flex bg-umainwhite rounded-[8px] border-solid border-umainstroke border-1  w-80 h-50 p-2'>
      <div>
        <h1>
          {restaurant.name}
        </h1>
        <h1>
          Cuisine: {restaurant.foodCategory}
        </h1>
        <h1>
          Price: {restaurant.priceRange}
        </h1>
        <p>
          Delivery Time: {restaurant.delivery_time_minutes} min
        </p>
        <p>
          {restaurant.isOpen ? 'open' : 'closed'}      
        </p>
      </div>
      
      <div className='w-40 h-40 position: relative'>
        <Image 
        fill
        src={restaurant.image_url}
        alt="new"
        />
      </div>
      
    </div>
  );
};



export default RestaurantCard;
