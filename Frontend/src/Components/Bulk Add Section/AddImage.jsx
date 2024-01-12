import React, { useState } from "react";

const ImageCard = () => {
  const [selectedImage, setSelectedImage] = useState(null);


  const handleAddSelectedImageBtn = () => {








    
  };
  




  const handleImageClick = () => {
    // Trigger the file input when the card is clicked
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Assuming you want to display the selected image
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const fileInputRef = React.createRef();

  return (
    <>
    <div style={{ maxWidth: "300px", cursor: "pointer" }} onClick={handleImageClick}>
      <img
        src={selectedImage || "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmHQL830tzTTlE_6bs4z25hrQdCN3z8xMhKsGIvydTD_QaHcxj9JrAqHQTPI7IYXaQ2_LMagJiUjrIJMtJS69nn7Dv7-WuY8qjWwVSyC9omuFGH2spDVKCJ3L9n7__fOZOebAtH977A_1A2M1k7mw-YrZzLpyVqIR6agBsC2kAv20DuZ4j57wQTDS7Vws/s512/photo.png"}
        alt="Selected Image"
        style={{ width: "100%", height: "auto" }}
      />
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
        ref={fileInputRef}
      />

    </div>
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >Add Selected Image</button>

    </>
  );
};

export default ImageCard;
