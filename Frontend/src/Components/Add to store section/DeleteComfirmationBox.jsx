// DeleteConfirmationModal.js

import React from 'react';

const DeleteConfirmationModal = ({ isOpen, onClose, onDelete }) => {
  return (
    <div className={`fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center ${isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg font-semibold mb-4">Do you really want to delete this product?</p>
        <div className="flex justify-end">
          <button
            onClick={onDelete}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mr-4 focus:outline-none focus:ring focus:border-blue-300"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
