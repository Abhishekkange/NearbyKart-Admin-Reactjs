import React, { useState } from 'react';
import ProductSidebar from './ProductSidebar';
import GeneralComponent from './GeneralComponent'; // Import your components
import EnterDescription from './EnterDescription';
import EnterShortDescription from './EnterShortDescription';
import CategorySelector from './CategoryAndSubcategory';
import ColorSizeSelector from './ColorSizeSelector';
import Tags from './Tags';

const ProductData = () => {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleButtonClick = (buttonName) => {
        // Handle button click and set selected component
        if (buttonName === 'general') {
            setSelectedComponent(<GeneralComponent />);
        } else if (buttonName === 'shortdescription') {
            setSelectedComponent(<EnterShortDescription />);
        } else if (buttonName === 'description') {
            setSelectedComponent(<EnterDescription />);
        }
        else if (buttonName === 'category and subcategory') {
            setSelectedComponent(<CategorySelector />);
        }
        else if (buttonName === 'Color and Sizes') {
            setSelectedComponent(<ColorSizeSelector />);
        }
        else if (buttonName === 'Tags') {
            setSelectedComponent(<Tags />);
        }
        // Add more conditions for other buttons
    };

    return (
        <div className="mt-4 bg-white rounded-lg shadow-lg p-2 ">
            <div className=" p-2 flex">
                <div className="w-64 h-90 overflow-y-auto mr-4 bg-white">
                    <ProductSidebar onButtonClick={handleButtonClick} />
                </div>
                <div style={{ height: '420px', width: '500px' }} className="flex-1 overflow-y-auto">
                    {/* Render selected component */}
                    {selectedComponent}
                </div>
            </div>
        </div>
    );
};

export default ProductData;
