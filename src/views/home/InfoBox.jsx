import React from 'react'

const InfoBox = ({ title, children }) => {
  return (
    <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded shadow-sm text-center">
      <h3 className="text-lg font-semibold text-green-700 mb-2">{title}</h3>
      <div className="text-gray-700">
        {children}
      </div>
    </div>
  );
};
export default InfoBox;
