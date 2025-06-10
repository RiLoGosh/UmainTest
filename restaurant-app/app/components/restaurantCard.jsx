"use client";
import React from 'react';
import { PROXY_URL } from '../apiConfig';
import { useState, useEffect } from 'react';

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '16px',
  margin: '8px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  width: '250px',
};

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
    <div className='flex  items-center justify-center w-80 h-50 p-2'>
      <h1>{restaurant.name}</h1>
      <p>Delivery Time: {restaurant.delivery_time_minutes} min</p>
      <p>
        {openStatus ? 'open' : 'closed'}      
        </p>
      <img 
        src={restaurant.image_url}
        alt="new"
      />
    </div>
  );
};



export default RestaurantCard;
