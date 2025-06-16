"use client";
import React from 'react';
import { PROXY_URL } from '../utilities/apiConfig';
import { useState, useEffect } from 'react';
import Image from 'next/image';


const RestaurantCard = ({ restaurant }) => {
  const [openStatus, setOpenStatus] = useState(false);

  useEffect(() => {
    const fetchOpenStatus = async () => {
      try {
        let res = await fetch(PROXY_URL + "/open/" + restaurant.id, {
          cache: 'no-store'
        });
        let data = await res.json();
        setOpenStatus(data.is_open);
      } catch (err) {
        console.error(err);
      }
    };

    fetchOpenStatus();
  }, [restaurant.id]); // re-run if restaurant.id changes

  console.log(openStatus);
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
