import React from 'react';

const GeneralComponent = ({ onNextItemClick }) => {
    const handleSaveAndContinue = () => {
        // Logic for saving and continuing
        // Call the provided function to select the next item in the sidebar
        onNextItemClick();
    };

    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">General Information</h2>
            <div className="mb-4">
                <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
                    Product Name
                </label>
                <input
                    type="text"
                    id="productName"
                    className="mt-1 p-2 block w-full rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                    placeholder="Enter Product Name"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700">
                    Price
                </label>
                <input
                    type="text"
                    id="productPrice"
                    className="mt-1 p-2 block w-full rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                    placeholder="Enter Price"
                />
            </div>
            <button
                onClick={handleSaveAndContinue}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
            >
                Save and Continue
            </button>
        </div>
    );
};

export default GeneralComponent;
