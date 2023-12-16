import React, { useContext, useState } from 'react';
import productContext from '../../Context/ProductContext';



const GeneralComponent = ({ onNextItemClick }) => {

    //state for input values
    const [producName,setProductName] = useState('');
    const [productPrice,setProductPrice] = useState('');
    const {productState , setProductState} = useContext(productContext);

    const handleProductNameChange = (e)=>{

        setProductName(e.target.value)


    }

    const handleProductPriceChange = (e)=>{

        setProductPrice(e.target.value);


    }
    



    const handleSaveAndContinue = () => {

        const updatedProductState = {
            ...productState, // Keep the previous state
            productName: producName, // Update productName with new value
            price: productPrice, // Update price with new value
        };
        

        setProductState(updatedProductState);
        setProductName("");
        setProductPrice("")
        


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
                    onChange={handleProductNameChange}
                    type="text"
                    id="productName"
                    value={producName}
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
                    value={productPrice}
                    onChange={handleProductPriceChange}
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
