import React,{useContext, useState} from 'react';
import productContext from '../../Context/ProductContext';




const ShowImage = ({ image, isSelected, onClick }) => {

    

    

    return (
        <div className={`border-4 w-40 ${isSelected ? 'border-black' : 'border-white'}`} style={{ maxWidth: "100%", maxHeight: "200px", overflow: "hidden" }}>
            <img
                src={image.dataURL}
                alt=""
                style={{ width: "100%", height: "70px", objectFit: "contain", cursor: 'pointer' }}
                onClick={onClick}
            />
            
        </div>
    );
}

export default ShowImage;
