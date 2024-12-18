import React, { useState, useEffect,useContext } from 'react';
import StoreContext from '../../Context/StoreContext'
import axios from "axios";
import DeleteConfirmationModal from './DeleteComfirmationBox';
import ConfirmationPopup from './ComfirmationBox';
import API from '../API/masterAPI'

const baseApi = API();

  const ProductCard = ({ product,onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);

  const storeId = localStorage.getItem('AuthToken');
  
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const addToStorePopup = () => {

    setOpenPopup(true);


  }

  const handleConfirmAction = (product) => {

    handleAddToStore(product);
    setOpenPopup(false);

  }

  const handleClosePopup = () => {

    setOpenPopup(false);



  }



  const handleAddToStore = async(product) => {

    try{

      const headers = {
        'x-session-token': storeId,
        'Content-Type': 'application/json'
      };
  
    const config = {
        headers: headers,
       };
     
        const result = await axios.post(`${baseApi}saveProduct`,product,config);
        console.log(result);
        handleDelete(product.id);
        onDelete();
       
        

    }catch(e){

        console.log('error');
    }
  

  };

  const handleDelete = async(id) => {

    const headers = {
      'x-session-token': storeId,
      'Content-Type': 'application/json'
    };

  const config = {
      headers: headers,
     };

    const response = await axios.delete(`https://nearby-kart-admin-bakend.vercel.app/api/buildProducts/${id}`,config);
    setShowModal(false);
    onDelete(); 

  };

  return (
    <div className="ml-4 mt-3 mx-auto bg-white rounded-xl shadow-md">
      <div className="">
        <div className="md:flex-shrink-0">
        <DeleteConfirmationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onDelete={()=>{

          handleDelete(product.id);
    }}
      />
       <ConfirmationPopup open={openPopup} handleClose={handleClosePopup} handleConfirm={()=>{handleConfirmAction(product)}} />
          <img className="h-48  w-full  " src={product.image} alt={product.name} />
        </div>
        <div className="p-2 flex flex-col justify-between w-full">
          <div className="flex">
            <h3 className="uppercase tracking-wide text-sm text-black font-semibold">Title: &nbsp;</h3>
            <p className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{product.name}</p>
            
          </div>
          <div className="mt-2  items-center justify-between">
            <button
             style={{width:'250px'}}
              onClick={()=>{

                addToStorePopup();



              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add to Store
            </button>
            <button
            
              style={{width:'250px'}}
              onClick={() => setShowModal(true)}

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
              <div className='flex'>
              <h3 className="uppercase tracking-wide text-sm text-black font-semibold">Category : &nbsp;</h3>
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{product.category}</div>
              </div>
              <div className="flex">
              <h3 className="uppercase tracking-wide text-sm text-black font-semibold">subcategory : &nbsp;</h3>
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{product.subcategory}</div>
              </div>

           
           <div className="flex">
           <h3 className="uppercase tracking-wide text-sm text-black font-semibold">Price : &nbsp;</h3>
           <p className="text-gray-500">{product.price}</p>
          
           </div>

           <div className="">
           <h3 className="uppercase tracking-wide text-sm text-black font-semibold">Description : </h3>
           <p className="mt-2 text-gray-500">{product.description}</p>
           </div>

           <div className="">
           <h3 className="uppercase tracking-wide text-sm text-black font-semibold">ShortDescription :</h3>
           <p className="mt-2 text-gray-500">{product.shortDescription}</p>
           </div>
        
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
