import React, { useState } from 'react';

const ImageInfo = () => {
    const [clicked, setClicked] = useState(null);

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <div className="mt-8">
            <div className="flex">
            <button className={ `bg-blue-800 text-white p-2  px-4 rounded-sm`} onClick={handleClick}>
    Edit Image
</button>

                <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-black text-md rounded-lg focus:ring-white focus:border-black block w-80 p-2 ml-8"
                    placeholder="Design No./Style No."
                />
                <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-black text-md rounded-lg focus:ring-white focus:border-black block w-80 p-2 ml-8"
                    placeholder="Price"
                />
            </div>
            <div className="mt-14">
                <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-black text-md rounded-lg focus:ring-white focus:border-black block p-2"
                    placeholder="Add Title"
                    style={{ width: '815px' }}
                />
            </div>
        </div>
    );
}

export default ImageInfo;
