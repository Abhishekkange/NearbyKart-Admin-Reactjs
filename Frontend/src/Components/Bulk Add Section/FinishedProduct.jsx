import React, { useState, useEffect,useContext } from 'react';
import StoreContext from '../../Context/StoreContext'
import SizeBox from './SizeBox';
import ProductContext from '../../Context/ProductContext';
import ProductSizesAndColor from './productSizesAndColor'
import axios from 'axios';
import ProductState from '../../Context/ProductState';
import Compressor from 'compressorjs';
import BuildProductModal from './ProductBuildingBox';
import ProductBuilt from './ProductBuilt';
import API from '../API/masterAPI'






const FinishedProduct = (props) => {

  const [sizes, setSizes] = useState(['Small', 'Medium', 'Large', 'XL']);
  const { productState, setProductState } = useContext(ProductContext);
  const[pImage,setPImage] = useState(null);
  const[imageFile,setImageFile] = useState(null);
  const[buildingProduct,setBuildingProduct] = useState(false);
  const [isProductBuilt,setIsProductBuilt] = useState(false);

  const storeId = localStorage.getItem('AuthToken');
  const baseApi = API();

  // useEffect(() => {
  //   if (localStorage.getItem('AuthToken')) {
      
  //     setStoreId(localStorage.getItem('AuthToken'));

  //   }
  //   else{

  //     //redirect to browser
  //     alert("Login Required");

  //   }
  // },[localStorage.getItem('AuthToken')]);

  const handleRefresh = () => {

    setIsProductBuilt(false);
    // props.refreshPage();

  };
  




  // Destructure productName from productState
  const { image, colorSizes, productName, price, category, subcategory, brand, description, shortDescription, categoryImage, subcategoryImage } = productState;

  const Upload2Cloud = async () => {

  
    const formData = new FormData();
    formData.append("image", props.imageFile);
  


    await axios.post(`${baseApi}uploadImage2cloud`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Set the content type to multipart/form-data
      },
    })
      .then(async response => {
        // Handle response
        console.log('Response:', response);


        

      // Prepare the product data object to send
      const productData = {

        "image": response.data,
        "name": productName,
        "categoryName": category,
        "categoryImage": categoryImage,
        "subcategoryImage": subcategoryImage,
        "subcategoryName": subcategory,
        "price": price,
        "shopName": "Kange",
        "shortDescription": shortDescription,
        "description": description

      };

      const emptyProductState = {

        productName: "",
        price: "",
        category: "",
        subcategory: "",
        brand: "",
        description: "",
        shortdescription: "",
        colorSizes: {}

      };

      // Call the function to store product data
      console.log(storeId);
      const createdProduct = await storeProductData(productData);

      // Handle success or response as needed
      console.log('Product created:', createdProduct);
      
     



      })
      .catch(error => {
        // Handle error
        console.error('Error:', error);
      });



  }

  const storeProductData = async (productData) => {
    try {


      const headers = {
        'x-session-token': storeId,
        'Content-Type': 'application/json'
      };
  
    const config = {
        headers: headers,
       };
       console.log(`${baseApi}buildProduct`);
       console.log(productData);
       console.log(config);
      const response = await axios.post(`${baseApi}buildProduct`, productData,config);
      console.log("The response is :"+response);
      return response;
      

    } catch (error) {
      throw new Error('Error storing product data:', error);
    }
  };



  // Function to handle storing product data
  const handleBuildProduct = async () => {
    try {

      setBuildingProduct(true);

    
      await Upload2Cloud();


      setBuildingProduct(false);
      setIsProductBuilt(true);
      
     

      
    



    } catch (error) {
      // Handle errors
      console.error('Error creating product:', error);
    }
  };




  return (
    <div style={{ width: '320px', height: '90vh' }} className=" bg-white rounded-lg shadow-lg overflow-auto">
      <div className="m-2 rounded-lg  w-full h-60 objectFit='contain'">

      <ProductBuilt isOpen={isProductBuilt} onClose={handleRefresh} />

      <BuildProductModal isOpen={buildingProduct} />

        <img
          src={props.image}
          alt=""
          placeholder=''
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

      <button onClick={handleBuildProduct} style={{ width: '280px', marginLeft: '20px' }} className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline">
        Build Product
      </button>

    </div>
  );
};

export default FinishedProduct;
