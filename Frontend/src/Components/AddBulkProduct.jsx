import React, { useState, useRef } from "react";

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

    return <div>
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
};

const ShowImage = ({ image, isSelected, onClick }) => {
    return <div className={`border-4 w-40 ${isSelected ? 'border-black' : 'border-white'}`} style={{ maxWidth: "100%", maxHeight: "200px", overflow: "hidden" }}>
        <img
            src={image.dataURL}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", cursor: 'pointer' }}
            onClick={onClick}
        />
    </div>
};

const ImageInfo = () => {
    const [clicked, setClicked] = useState(null);

    const handleClick = () => {
        setClicked(!clicked);
    }

    return <div className="mt-8">
        <div className="flex">
            <button className="p-2 bg-light-green px-4 rounded-sm active:bg-green-400" onClick={handleClick}>Edit Image</button>
            <input type="text" className="bg-gray-50 border border-gray-300 text-black text-md rounded-lg focus:ring-white focus:border-black block w-80 p-2 ml-8" placeholder="Design No./Style No." />
            <input type="text" className="bg-gray-50 border border-gray-300 text-black text-md rounded-lg focus:ring-white focus:border-black block w-80 p-2 ml-8" placeholder="Price" />
        </div>
        <div className="mt-14">
            <input type="text" className="bg-gray-50 border border-gray-300 text-black text-md rounded-lg focus:ring-white focus:border-black block p-2" placeholder="Add Title" style={{ width: '815px' }} />
        </div>
    </div>
}

const ProductData = () => {
    const [clickedButton, setClickedButton] = useState(null);

    const handleClick = (buttonName) => {
        console.log("hello");
        setClickedButton((prevButton) => (prevButton === buttonName ? null : buttonName));
    }

    return <div className="mt-10">
        <div className="card border-black border-2" style={{ width: '815px' }}>
            <div className="text-xl font-semibold p-3 border-b-2 border-black">
                <span>Product Data</span>
            </div>
            <div className="flex flex-col border-black border-r-2 w-60 bg-gray-200">
                <div>
                    <button
                        name="general"
                        className={`flex p-3 gap-3 w-full ${clickedButton === 'general' ? 'bg-light-gray' : ''} `}
                        onClick={() => handleClick('general')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hammer"> <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9" /> <path d="M17.64 15 22 10.64" /> <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91" /> </svg>
                        <span>General</span>
                    </button>
                </div>
                <div>
                    <button
                        name="inventory"
                        className={`flex p-3 gap-3 w-full ${clickedButton === 'inventory' ? 'bg-light-gray' : ''} `}
                        onClick={() => handleClick('inventory')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
                        <span>Inventory</span>
                    </button>
                </div>
                <div>
                    <button
                        name="attributes"
                        className={`flex p-3 gap-3 w-full ${clickedButton === 'attributes' ? 'bg-light-gray' : ''} `}
                        onClick={() => handleClick('attributes')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-list"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M12 11h4" /><path d="M12 16h4" /><path d="M8 11h.01" /><path d="M8 16h.01" /></svg>
                        <span>Attributes</span>
                    </button>
                </div>
                <div>
                    <button
                        name="shortDescription"
                        className={`flex p-3 gap-3 w-full ${clickedButton === 'shortDescription' ? 'bg-light-gray' : ''} `}
                        onClick={() => handleClick('shortDescription')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open-text"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /><path d="M6 8h2" /><path d="M6 12h2" /><path d="M16 8h2" /><path d="M16 12h2" /></svg>
                        <span>Short Discription</span>
                    </button>
                </div>
                <div>
                    <button
                        name="description"
                        className={`flex p-3 gap-3 w-full ${clickedButton === 'description' ? 'bg-light-gray' : ''} `}
                        onClick={() => handleClick('description')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open-text"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /><path d="M6 8h2" /><path d="M6 12h2" /><path d="M16 8h2" /><path d="M16 12h2" /></svg>
                        <span>Discription</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
}

export default AddBulkProduct;