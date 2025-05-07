import React from 'react'

const DealCard = ({ dealTitle, description, price }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition bg-green-50 text-center">
      <h3 className="text-xl font-bold mb-2 text-green-700">{dealTitle}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-green-800 font-semibold">Only for ${price}!</p>
    </div>
  );
};
 
export default DealCard
  
