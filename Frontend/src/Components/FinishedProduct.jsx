import React,{useContext, useState} from 'react';
import SizeBox from './SizeBox';
import ProductContext from '../Context/ProductContext';
import ProductSizesAndColor from './productSizesAndColor'

const FinishedProduct = (props) => {

    const [sizes, setSizes] = useState(['Small', 'Medium', 'Large', 'XL']); 
    const { productState } = useContext(ProductContext);

  // Destructure productName from productState
  const { productName,price,category,subcategory,brand,description,shortDescription } = productState;

  return (
    <div style={{width:'300px',height:'88vh'}} className=" bg-white rounded-lg shadow-lg overflow-auto">
      <div className="w-full h-60 objectFit='contain'">
        <img
          src={props.image}
          alt="Product"
          className="w-full h-full "
        />
      </div>
      <div className="p-4 overflow-y-auto">
        {/* Product Name */}
        <h1 className="text-xl font-bold mb-2">{productName}</h1>
        {/* Product Price */}
        <p className="text-lg font-bold mb-2">Rs. {price}</p>
        {/* Short Description */}
        <p className="text-sm mb-4">
          {shortDescription}
          {/* Repeated for content overflow */}
        </p>
        {/* Long Description */}
        <p className="text-sm mb-4">
          {description}
          {/* Repeated for content overflow */}
        </p>
        {/* Brand, Category, Subcategory, etc. */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
            {brand}
          </span>
          <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
            {category}
          </span>
          <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
            {subcategory}
          </span>
          
        </div>
        <div className="mt-4">
        <ProductSizesAndColor />
                    </div>

      </div>

      <button style={{width:'250px', marginLeft:'20px'}}  className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline">
              Build Product
            </button>
     
    </div>
  );
};

export default FinishedProduct;
