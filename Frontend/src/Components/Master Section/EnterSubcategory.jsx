import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Entersubcategory = () => {


  const [subcategoryName, setsubcategoryName] = useState('');
  const [subcategoryImage, setsubcategoryImage] = useState('');
  const [subcategory, setsubcategory] = useState([]);
  const [previewImage, setPreviewImage] = useState(''); 
  const [myFile,setMyFile] = useState(null);

  // Fetch subcategory from API on component mount
  useEffect(() => {
    fetchData();
  }, []);

  const handleUpload = (event)=>{

    
     //import image from local storage here
     const file = event.target.files[0];
     if (file) {
       const reader = new FileReader();
       reader.onload = (e) => {
         setMyFile(e.target.result);
       };
       reader.readAsDataURL(file);
     }

    //upload to google cloud storage
   Upload2Cloud;

  }

  const Upload2Cloud = async () => {

    const formData = new FormData();
    formData.append("image", myFile);


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



  const fetchData = async () => {
    try {
      const response = await axios.get('https://nearby-kart-admin-bakend.vercel.app/api/subcategory'); // Replace with your API endpoint
      setsubcategory(response.data); // Assuming API returns an array of subcategory
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleCreatesubcategory = async () => {
    try {
      await axios.post('https://nearby-kart-admin-bakend.vercel.app/api/subcategory', { subcategoryName, subcategoryImage }); // Replace with your API endpoint
      fetchData(); // Refresh subcategory after adding new subcategory
      setsubcategoryName('');
      setsubcategoryImage('');
    } catch (error) {
      console.error('Error creating subcategory:', error);
    }
  };

  const handleDeletesubcategory = async (subcategoryId) => {
    try {
      await axios.delete(`https://nearby-kart-admin-bakend.vercel.app/api/subcategory/${subcategoryId}`); // Replace with your API endpoint
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
      <Button onClick={handleUpload} style={{ margin: '5px' }} className="p-2 mx-5" variant="contained" component="label">
        Upload Image
        <input type="file" hidden onChange={(e) => {
          setsubcategoryImage(e.target.files[0]);
          setPreviewImage(URL.createObjectURL(e.target.files[0])); // Set preview image URL
        }} />
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
