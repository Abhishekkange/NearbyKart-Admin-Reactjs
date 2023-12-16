import React, { useState, useEffect, useContext } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import productContext from '../Context/ProductContext';

const EnterShortDescription = () => {
  const [shortDescription, setShortDescription] = useState('');
  const [sWordCount, setsWordCount] = useState(0);

  const {productState ,setProductState} = useContext(productContext);


  const stripHTMLTags = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  const handleSaveButton = () => {

    const textOnlyDescription = stripHTMLTags(shortDescription);


    const updatedProductState = {
            
      "shortDescription":textOnlyDescription
   
   }
   
   setProductState(prevState =>({...prevState,...updatedProductState}));


  }


  useEffect(() => {
    setsWordCount(shortDescription.trim().split(/\s+/).filter(Boolean).length);
  }, [shortDescription]);

  const handleMagicButtonClick = () => {
    // Add your magic here
    console.log('Magic button clicked!');
  };

  return (
    <div style={{height:'420px'}} className="relative w-150 h-60 border border-gray-300 rounded p-4 overflow-y-auto">
      <ReactQuill
        style={{ height: '280px' }}
        theme="snow"
        value={shortDescription}
        onChange={(value) => setShortDescription(value)}
        modules={{
          toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image'],
            ['clean']
          ],
        }}
        placeholder="Enter your short description here..."
      />
      <div className="mt-20 flex justify-between items-center text-gray-500">
        <div className="flex items-center">
          <span className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M11 6H5v2h6V6zm0 4H5v2h6v-2zm2-8H3a2 2 0 00-2 2v12a2 2 0 002 2h6v4l6-6V2a2 2 0 00-2-2zm-2 14h2.586L13 16.414V12z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span>{sWordCount} words</span>
        </div>
        <div style={{width:'30px'}}>
          <button 
          style={{width:'30px'}}
            className=" text-gray-500"
            onClick={handleMagicButtonClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 12a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M11 6h4v4h-1V7a1 1 0 00-1-1h-2V6zm-1 0H6v1H5V5a1 1 0 011-1h4v2zm-5 6H5v1h1v1a1 1 0 001 1h4v-2H6v-1zm10 3v-1h-1v-1a1 1 0 00-1-1h-4v2h2v1h1v1h1a1 1 0 001-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <button onClick={handleSaveButton} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline">
                Save and Continue
            </button>
    </div>
  );
};

export default EnterShortDescription;
