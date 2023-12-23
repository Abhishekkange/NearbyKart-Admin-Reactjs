import React, { useState } from 'react';
import axios from "axios";

const ProductCard = ({ product }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleAddToStore = async(product) => {

    try{

        const result = await axios.post('http://localhost:3000/api/saveProduct',product);
        console.log('Product Added to store');
        //delete the product in build Products section
        handleDelete(product.id);
       
     
        

    }catch(e){

        console.log('error');
    }
   



  };

  const handleDelete = async(id) => {


    const response = await axios.delete(`http://localhost:3000/api/buildProducts/${id}`);
   

  };

  return (
    <div className="ml-4 mt-3 mx-auto bg-white rounded-xl shadow-md">
      <div className="">
        <div className="md:flex-shrink-0">
          <img className="h-48  w-full  " src={product.imageUrl} alt={product.title} />
        </div>
        <div className="p-2 flex flex-col justify-between w-full">
          <div>
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{product.category}</div>
            <h2 className="block mt-1 text-lg leading-tight font-medium text-black">{product.title}</h2>
            
          </div>
          <div className="mt-2  items-center justify-between">
            <button
             style={{width:'250px'}}
              onClick={()=>{

                handleAddToStore(product);



              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add to Store
            </button>
            <button
            
              style={{width:'250px'}}
              onClick={()=>{

                    handleDelete(product.id);
              }}
              className="bg-red-500 mt-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Delete
            </button>
          </div>
          <div className="mt-4">
            <button
              onClick={handleToggle}
              className="text-indigo-500 hover:text-indigo-700 font-semibold focus:outline-none"
            >
              {isExpanded ? 'Close' : 'View Details'}
            </button>
          </div>
          {isExpanded && (
            <div className="mt-4">
              <p className="text-gray-500">{product.price}</p>
              <p className="mt-2 text-gray-500">{product.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;