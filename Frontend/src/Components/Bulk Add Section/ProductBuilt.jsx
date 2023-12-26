// ProductBuiltModal.js

import React from 'react';

const ProductBuiltModal = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center ${isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg font-semibold mb-4">Product has been built!</p>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductBuiltModal;
