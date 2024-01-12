// ProductSidebar.js
import React, { useState } from 'react';

const ProductSidebar = ({ onButtonClick }) => {
    const [clickedButton, setClickedButton] = useState(null);

    const handleClick = (buttonName) => {
        setClickedButton(buttonName);
        onButtonClick(buttonName); // Pass the clicked button to parent component
    }

    return (
        <div style={{height:'450px'}} className="flex flex-col  w-90 bg-gray-200">
            <button
                name="general"
                className={`flex p-3 gap-3 w-full ${clickedButton === 'general' ? 'bg-blue-400 text-white' : ''} `}
                onClick={() => handleClick('general')}
            >
                <span>General</span>
            </button>
            <button
                name="images"
                className={`flex p-3 gap-3 w-full ${clickedButton === 'images' ? 'bg-blue-400 text-white' : ''} `}
                onClick={() => handleClick('images')}
            >
                <span>Media</span>
            </button>
            <button
                name="Color and Sizes"
                className={`flex p-3 gap-3 w-full ${clickedButton === 'Color and Sizes' ? 'bg-blue-400 text-white' : ''} `}
                onClick={() => handleClick('Color and Sizes')}
            >
                <span>Color and Sizes</span>
            </button>
            <button
                name="category and subcategory"
                className={`flex p-3 gap-3 w-full ${clickedButton === 'category and subcategory' ? 'bg-blue-400 text-white' : ''} `}
                onClick={() => handleClick('category and subcategory')}
            >
                <span>Category and subcategory</span>
            </button>
            <button
                name="Tags"
                className={`flex p-3 gap-3 w-full ${clickedButton === 'Tags' ? 'bg-blue-400 text-white' : ''} `}
                onClick={() => handleClick('Tags')}
            >
                <span>Tags</span>
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
