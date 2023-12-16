import React, { useState, useRef } from "react";
import ImageInfo from "./ImageInfo";
import ProductData from "./ProductData";
import ShowImage from "./ShowImage";
import { width } from "@mui/system";
import FinishedProduct from "./FinishedProduct";
import ProductState from "../Context/ProductState";

const AddBulkProduct = () => {
    const [images, setImages] = useState([]);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const fileInputRef = useRef(null);

    const [productName,setProductName]= useState('Product Name');
    const [productPrice,setProductPrice] = useState('Product Price');
    const [categoryName,setCategoryName] = useState('Category');
    const [subcategoryName,setSubcategoryName] = useState('Subcategory');
    const [brandName,setBrandName] = useState('Brand Name');
    const [description,setDescription] = useState('Description');
    const [shortDescription,setShortDescription] = useState('Short Description');



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
        handleFiles(files);
    };

    const onClickImage = (index) => {
        setSelectedImageIndex(index === selectedImageIndex ? null : index);
        console.log(index + ' no image clicked');
    };

    return (

        <ProductState>


       
        <div className="flex">

            <div className="m-2">
                <div className="border-2 mt-2 p-2  rounded-lg shadow-lg">
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

                        <div className="p-2 border-2 w-40 border-black rounded-lg" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => fileInputRef.current.click()}>
                            <span style={{ cursor: 'pointer' }}>Click to add image</span>
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
                <FinishedProduct brandName={brandName} description = {description} shortDescription={shortDescription} productName = {productName} price={productPrice}  category = {categoryName} subcategory = {subcategoryName} />
            </div>
        </div>
        </ProductState>
    );
};

export default AddBulkProduct;
