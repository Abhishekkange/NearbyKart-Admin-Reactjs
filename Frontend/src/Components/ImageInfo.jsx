import React, { useState } from 'react';

const ImageInfo = () => {
    const [clicked, setClicked] = useState(null);

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <div className="mt-3">
            <div className="flex">
            <button className={ `bg-blue-800 text-white p-2  px-4 rounded-sm`} onClick={handleClick}>
    Edit Image
</button>

                
            
            </div>
           
        </div>
    );
}

export default ImageInfo;
