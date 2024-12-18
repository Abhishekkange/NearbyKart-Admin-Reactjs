import React, { useState, useEffect,useContext } from 'react';
import StoreContext from '../../Context/StoreContext'
import axios from 'axios';
import { TextField, Button, Grid, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Compressor from 'compressorjs';
import API from '../API/masterAPI';


let reader = null;
const Entersubcategory = () => {


  const [subcategoryName, setsubcategoryName] = useState('');
  const [subcategoryImage, setsubcategoryImage] = useState('');
  const [subcategory, setsubcategory] = useState([]);
  const [previewImage, setPreviewImage] = useState(''); 
  const [image,setImage] = useState('');
  const [myFile,setMyFile] = useState(null);

  const baseApi = API();
 
  const storeId = localStorage.getItem('AuthToken');

  // Fetch subcategory from API on component mount
  useEffect(() => {
    fetchData();
  }, []);

 
  const handleFileInput = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Use Compressor.js to compress the image
      new Compressor(file, {
        quality: 0.2, // Adjust the quality as needed
        success(compressedFile) {
           reader = new FileReader();

          reader.onload = function (e) {
            setPreviewImage(e.target.result); 
            Upload2Cloud(compressedFile); // Pass the compressed file to the upload function
            setImage({ name: file.name, type: file.type, dataURL: e.target.result });
          };

          reader.readAsDataURL(compressedFile);
        },
        error(err) {
          console.error('Compression failed:', err.message);
        },
      });
    }
  };

  const Upload2Cloud = async (file) => {
    const formData = new FormData();
    formData.append('image', file);
    console.log(file);
    
    try {
      const response = await axios.post(
        `${baseApi}uploadImage2cloud`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setsubcategoryImage(response.data);
      console.log(response.data);
      
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchData = async () => {
    try {
      const headers = {
        'x-session-token': storeId,
        'Content-Type': 'application/json'
      };
  
    const config = {
        headers: headers,
       };
      const response = await axios.get(`${baseApi}subcategory`,config); // Replace with your API endpoint
      setsubcategory(response.data); // Assuming API returns an array of subcategory
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleCreatesubcategory = async () => {
    try {
      const headers = {
        'x-session-token': storeId,
        'Content-Type': 'application/json'
      };
  
    const config = {
        headers: headers,
       };
      await axios.post(`${baseApi}subcategory`, { subcategoryName, subcategoryImage },config); // Replace with your API endpoint
      fetchData(); // Refresh subcategory after adding new subcategory
      setsubcategoryName('');
      setsubcategoryImage('');
      setPreviewImage('');
    } catch (error) {
      console.error('Error creating subcategory:', error);
    }
  };

  const handleDeletesubcategory = async (subcategoryId) => {
    try {
      const headers = {
        'x-session-token': storeId,
        'Content-Type': 'application/json'
      };
  
    const config = {
        headers: headers,
       };
      await axios.delete(`${baseApi}subcategory/${subcategoryId}`,config); // Replace with your API endpoint
      fetchData(); // Refresh subcategory after deleting a subcategory
    } catch (error) {
      console.error('Error deleting subcategory:', error);
    }
  };

  return (
    <div className=" block mx-auto p-5 ">
      <div className="mb-5 block">
        <TextField
          style={{ width: '550px' }}
          label="subcategory Name"
          value={subcategoryName}
          onChange={(e) => setsubcategoryName(e.target.value)}
          variant="outlined"
          className="mr-3 w-80"
        />

      </div>
      <Button
        onClick={() => document.getElementById('fileInput').click()}
        style={{ margin: '5px' }}
        className="p-2 mx-5"
        variant="contained"
        component="label"
      >
        Upload Image
        <input id="fileInput" type="file" hidden onChange={handleFileInput} />
      </Button>
      {previewImage && (
        <img src={previewImage} alt="Selected" style={{ width: '100px', height: '100px', margin: '5px' }} />
      )}
      <Button style={{ margin: '5px' }} variant="contained" color="primary" onClick={handleCreatesubcategory}>
        Create subcategory
      </Button>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {subcategory.map((subcategory) => (
          <div key={subcategory._id} className="flex items-center bg-white p-4 rounded shadow-md">
            <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
              <img
                src={subcategory.subcategoryImage} // Replace with your subcategory image field
                alt={subcategory.subcategoryName} // Replace with your subcategory name field
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-lg font-semibold">{subcategory.subcategoryName}</h3>


            <IconButton onClick={() => handleDeletesubcategory(subcategory._id)}>
              <DeleteIcon />
            </IconButton>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Entersubcategory;
