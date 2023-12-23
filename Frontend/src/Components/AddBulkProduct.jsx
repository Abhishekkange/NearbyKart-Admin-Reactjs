import React, { useState, useRef,useContext } from "react";
import ImageInfo from "./Bulk Add Section/ImageInfo";
import ProductData from "./Bulk Add Section/ProductData";
import ShowImage from "./Bulk Add Section/ShowImage";
import { width } from "@mui/system";
import FinishedProduct from "./Bulk Add Section/FinishedProduct";
import ProductState from "../Context/ProductState";
import axios from "axios";
import productContext from '../Context/ProductContext';


const AddBulkProduct = () => {
const [images, setImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const fileInputRef = useRef(null);
  const [productName, setProductName] = useState('Product Name');
  const [productPrice, setProductPrice] = useState('Product Price');
  const [categoryName, setCategoryName] = useState('Category');
  const [subcategoryName, setSubcategoryName] = useState('Subcategory');
  const [brandName, setBrandName] = useState('Brand Name');
  const [description, setDescription] = useState('Description');
  const [shortDescription, setShortDescription] = useState('Short Description');
   const[myFile,setMyFile] = useState(null);
   const { productState,setProductState } = useContext(productContext);
   const [nimage,setNImage] = useState('goof'); 


 


    const handleFiles = (files) => {
        Array.from(files).forEach((file) => {
            const reader = new FileReader();

            reader.onload = function (e) {

                
                setImages((prevImages) => [
                    ...prevImages,
                    { name: file.name, type: file.type, dataURL: e.target.result },
                ]);
               
            };

            reader.readAsDataURL(file);
        });
    };

    const handleFileInput = (e) => {
        const files = e.target.files;
        setMyFile(files[0]);
        
        handleFiles(files);
       
        
        

    };

    const onClickImage = (index) => {
        setSelectedImageIndex(index === selectedImageIndex ? null : index);
        // Call the function for uploading to google cloud
        console.log(index + ' no image clicked');
      };

    const Upload2Cloud = async () => {

      const formData = new FormData();
      formData.append("image",myFile);

     
     await axios.post('https://nearby-kart-admin-bakend.vercel.app/api/uploadImage2cloud', formData, {
  headers: {
    'Content-Type': 'multipart/form-data', // Set the content type to multipart/form-data
  },
})
  .then(async response => {
    // Handle response
    console.log('Response:', response.data);
    
   

  })
  .catch(error => {
    // Handle error
    console.error('Error:', error);
  });
      
        
        
    }
      
    

    return (

    
       
        <div className="flex">

            <div className="m-2">
                <div className="border-2 mt-2 p-2  rounded-lg shadow-sm">
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {images &&
                            images.map((image, index) => (
                                <ShowImage
                                    key={index}
                                    image={image}
                                    isSelected={index === selectedImageIndex}
                                    onClick={() => onClickImage(index)}
                                />
                            ))}

                        <div className="p-2  w-40  rounded-lg" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => fileInputRef.current.click()}>

                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => fileInputRef.current.click()}
                        >
                            Add Image
                        </button>


                        </div>
                    </div>

                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileInput}
                    />
                </div>
                <ProductData />
            </div>

            <div className="m-5" style={{ width: '270px', height: '85vh' }}>
                <FinishedProduct productImage = {nimage}  onButtonClick={Upload2Cloud} image={images.length > 0 ? images[0].dataURL : "abc"} brandName={brandName} description = {description} shortDescription={shortDescription} productName = {productName} price={productPrice}  category = {categoryName} subcategory = {subcategoryName} />
            </div>
        </div>
       
    );
};

export default AddBulkProduct;
