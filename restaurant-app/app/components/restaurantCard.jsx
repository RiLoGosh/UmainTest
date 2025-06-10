"use client";
import React from 'react';
import { PROXY_URL } from '../apiConfig';

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '16px',
  margin: '8px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  width: '250px',
};


const RestaurantCard = ({ restaurant }) => {


  return (
    <div style={cardStyle}>
      <h3>{restaurant.name}</h3>
      <p>Delivery Time: {restaurant.delivery_time_minutes}</p>
      <img 
      src={PROXY_URL + restaurant.image_url}
      alt="new"
      />
    </div>
  );
};

export default RestaurantCard;
