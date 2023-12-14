import React, { useState } from 'react';

const ProductData = () => {
    const [clickedButton, setClickedButton] = useState(null);

    const handleClick = (buttonName) => {
        setClickedButton((prevButton) => (prevButton === buttonName ? null : buttonName));
    }

    return (
        <div className="mt-10">
            <div className="card border-black border-2" style={{ width: '815px' }}>
                <div className="text-xl font-semibold p-3 border-b-2 border-black">
                    <span>Product Data</span>
                </div>
                <div className="flex flex-col border-black border-r-2 w-60 bg-gray-200">
                    <div>
                        <button
                            name="general"
                            className={`flex p-3 gap-3 w-full ${clickedButton === 'general' ? 'bg-light-gray' : ''} `}
                            onClick={() => handleClick('general')}
                        >
                            {/* Icon */}
                            <span>General</span>
                        </button>
                    </div>
                    <div>
                        <button
                            name="inventory"
                            className={`flex p-3 gap-3 w-full ${clickedButton === 'inventory' ? 'bg-light-gray' : ''} `}
                            onClick={() => handleClick('inventory')}
                        >
                            {/* Icon */}
                            <span>Inventory</span>
                        </button>
                    </div>
                    <div>
                        <button
                            name="attributes"
                            className={`flex p-3 gap-3 w-full ${clickedButton === 'attributes' ? 'bg-light-gray' : ''} `}
                            onClick={() => handleClick('attributes')}
                        >
                            {/* Icon */}
                            <span>Attributes</span>
                        </button>
                    </div>
                    <div>
                        <button
                            name="shortDescription"
                            className={`flex p-3 gap-3 w-full ${clickedButton === 'shortDescription' ? 'bg-light-gray' : ''} `}
                            onClick={() => handleClick('shortDescription')}
                        >
                            {/* Icon */}
                            <span>Short Description</span>
                        </button>
                    </div>
                    <div>
                        <button
                            name="description"
                            className={`flex p-3 gap-3 w-full ${clickedButton === 'description' ? 'bg-light-gray' : ''} `}
                            onClick={() => handleClick('description')}
                        >
                            {/* Icon */}
                            <span>Description</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductData;
