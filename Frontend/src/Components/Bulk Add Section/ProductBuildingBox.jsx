// BuildProductModal.js

import React from 'react';
import productBuildingAnimation from '../../../src/assets/Icons/buildProduct.gif'; // Replace with your animated GIF

const BuildProductModal = ({ isOpen }) => {
  return (
    <div className={`fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center ${isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-center mb-4">
          <img src={productBuildingAnimation} alt="Product Building" className="w-32 h-32" />
        </div>
        <p className="text-lg font-semibold mb-4">Building the product...</p>
      </div>
    </div>
  );
};

export default BuildProductModal;
