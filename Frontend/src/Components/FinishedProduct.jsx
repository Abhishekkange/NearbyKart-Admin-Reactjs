import React,{useContext, useState} from 'react';
import SizeBox from './SizeBox';
import ProductContext from '../Context/ProductContext';




const FinishedProduct = (props) => {
    const [sizes, setSizes] = useState(['Small', 'Medium', 'Large', 'XL']); // Example sizes list

    const { productState } = useContext(ProductContext); // Accessing productState from the context

  // Destructure productName from productState
  const { productName } = productState;

  return (
    <div style={{width:'270px',height:'88vh'}} className=" bg-white rounded-lg shadow-lg overflow-auto">
      <div className="w-full h-60 objectFit='contain'">
        {/* Product Image */}
        <img
          src=""
          alt="Product"
          className="w-full h-full "
        />
      </div>
      <div className="p-4 overflow-y-auto">
        {/* Product Name */}
        <h1 className="text-xl font-bold mb-2">{productName}</h1>
        {/* Product Price */}
        <p className="text-lg font-bold mb-2">Rs. {props.price}</p>
        {/* Short Description */}
        <p className="text-sm mb-4">
          {props.shortDescription}
          {/* Repeated for content overflow */}
        </p>
        {/* Long Description */}
        <p className="text-sm mb-4">
          {props.description}
          {/* Repeated for content overflow */}
        </p>
        {/* Brand, Category, Subcategory, etc. */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
            {props.brandName}
          </span>
          <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
            {props.category}
          </span>
          <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
            {props.subcategory}
          </span>
          
        </div>
        <div className="mt-4">
                        <h2 className="text-lg font-semibold mb-2">Sizes</h2>
                        <ul className='flex' >
                            {sizes.map((size, index) => (
                                <li  key={index} className="text-sm mx-1 my-1">
                                    <SizeBox size={size} />
                                </li>
                            ))}
                        </ul>
                    </div>

      </div>
    </div>
  );
};

export default FinishedProduct;
