"use client";
import React from 'react';
import { PROXY_URL } from '../utilities/apiConfig';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { fetchOpenStatus } from '@/utilities/api';


const RestaurantCard = ({ restaurant }) => {
  const [openStatus, setOpenStatus] = useState(false);

  useEffect(() => {
    const checkOpenStatus = async () => {
      try {
        const isOpen = await fetchOpenStatus(restaurant.id);
        setOpenStatus(isOpen);
      } catch (err) {
        console.error(err);
      }
    };

    checkOpenStatus();
  }, [restaurant.id]);

  return (
    <div className='flex bg-umainwhite rounded-[8px] border-solid border-umainstroke border-1  w-80 h-50 p-2'>
      <div>
        <h1>
          {restaurant.name}
        </h1>
        <p>
          Delivery Time: {restaurant.delivery_time_minutes} min
        </p>
        <p>
          {openStatus ? 'open' : 'closed'}      
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
