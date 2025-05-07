import React from 'react';

const RestaurantCard = ({ name, rating, cuisine, location }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition text-center">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-1">{cuisine}</p>
      <p className="text-gray-500 mb-1">{location}</p>
      <p className="text-yellow-500">Rating: {rating} ⭐</p>
    </div>
  );
};

export default RestaurantCard;
