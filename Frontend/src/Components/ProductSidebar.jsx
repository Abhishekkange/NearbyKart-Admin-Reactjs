// ProductSidebar.js
import React, { useState } from 'react';

const ProductSidebar = ({ onButtonClick }) => {
    const [clickedButton, setClickedButton] = useState(null);

    const handleClick = (buttonName) => {
        setClickedButton(buttonName);
        onButtonClick(buttonName); // Pass the clicked button to parent component
    }

    return (
        <div className="flex flex-col  w-80 bg-gray-200">
            <button
                name="general"
                className={`flex p-3 gap-3 w-full ${clickedButton === 'general' ? 'bg-blue-400 text-white' : ''} `}
                onClick={() => handleClick('general')}
            >
                <span>General</span>
            </button>
            <button
                name="description"
                className={`flex p-3 gap-3 w-full ${clickedButton === 'description' ? 'bg-blue-400 text-white' : ''} `}
                onClick={() => handleClick('description')}
            >
                <span>Description</span>
            </button>
            <button
                name="shortdescription"
                className={`flex p-3 gap-3 w-full ${clickedButton === 'shortdescription' ? 'bg-blue-400 text-white' : ''} `}
                onClick={() => handleClick('shortdescription')}
            >
                <span>Short Description</span>
            </button>
            {/* Add other buttons similarly */}
        </div>
    );
};

export default ProductSidebar;
