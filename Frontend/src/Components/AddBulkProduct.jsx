import React, { useState, useRef } from "react";
import ImageInfo from "./ImageInfo";
import ProductData from "./ProductData";
import ShowImage from "./ShowImage";

const AddBulkProduct = () => {
    const [images, setImages] = useState([]);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const fileInputRef = useRef(null);

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
        <div>
            <div className="border-2 mt-4 p-4 border-black">
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

                    <div className="p-2 border-2 w-40 border-black" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => fileInputRef.current.click()}>
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
            <ImageInfo />
            <ProductData />
        </div>
    );
};

export default AddBulkProduct;
