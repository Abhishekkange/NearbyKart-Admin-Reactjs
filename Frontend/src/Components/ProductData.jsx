import React, { useState } from 'react';
import ProductSidebar from './ProductSidebar';
import GeneralComponent from './Login'; // Import your components
import EnterDescription from './EnterDescription';

const ProductData = () => {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleButtonClick = (buttonName) => {
        // Handle button click and set selected component
        if (buttonName === 'general') {
            setSelectedComponent(<GeneralComponent />);
        } else if (buttonName === 'shortdescription') {
            setSelectedComponent(<GeneralComponent />);

        }
        else if(buttonName  === 'description') {
            setSelectedComponent(<EnterDescription />);


        }
        // Add more conditions for other buttons
    }

    return (
        <div className="mt-4">
            <div className="border-2 border-black p-4 flex">
                <div className="w-64 h-90 overflow-y-auto mr-4 bg-gray-200">
                    <ProductSidebar onButtonClick={handleButtonClick} />
                </div>
                <div style={{height:'420px',width:'530px'}} className="flex-1  overflow-y-auto">
                    {/* Render selected component */}
                    {selectedComponent}
                </div>
            </div>
        </div>
    );
}

export default ProductData;
