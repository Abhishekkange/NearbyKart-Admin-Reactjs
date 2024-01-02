import React, { useState } from 'react';
import axios from "axios";
import DeleteConfirmationModal from '../Add to store section/DeleteComfirmationBox';

const ProductCard = ({ product,onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [storeId, setStoreId] = useState(''); // State to hold storeId
  const { storeId: contextStoreId } = useContext(StoreContext); // Retrieve StoreContext using useContext hook

  useEffect(() => {
    if (contextStoreId) {
      setStoreId(contextStoreId); // Get storeId from StoreContext
    }
  }, [contextStoreId]);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };


    const handleDelete = async(id) => {


    const response = await axios.delete(`https://nearby-kart-admin-bakend.vercel.app/api/${storeId}/deleteProduct/${id}`);
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
          <img className="h-48  w-full  " src={product.image} alt={product.name} />
        </div>
        <div className="p-2 flex flex-col justify-between w-full">
          <div className="flex">
            <h3 className="uppercase tracking-wide text-sm text-black font-semibold">Title: &nbsp;</h3>
            <p className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{product.name}</p>
            
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
           <div className="mt-2  items-center justify-between">
           
           <button
           
             style={{width:'250px'}}
             onClick={() => setShowModal(true)}

             className="bg-red-500 mt-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
           >
             Delete
           </button>
         </div>
           </div>
        
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
