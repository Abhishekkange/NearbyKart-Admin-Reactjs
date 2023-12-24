import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'

const EnterCategory = () => {
  const [categoryName, setCategoryName] = useState('');
  const [categoryImage, setCategoryImage] = useState('');
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);
  const [myFile, setMyFile] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const handleDelete = async (categoryId) => {
    try {
      await axios.delete(`http://localhost:3000/api/category/${categoryId}`);
      fetchData(); // Refresh categories after deletion
      console.log('Category deleted successfully');
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
  
    
    Upload2Cloud(file);

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        setImage({ name: file.name, type: file.type, dataURL: e.target.result });
      };

      reader.readAsDataURL(file);

    }
  };

  const Upload2Cloud = async (file) => {
    const formData = new FormData();
    formData.append('image', file);
    console.log(file);
    
    try {
      const response = await axios.post(
        'http://localhost:3000/api/uploadImage2cloud',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setCategoryImage(response.data);
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/category');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleCreateCategory = async () => {
    try {
      console.log(categoryImage);
      await axios.post('http://localhost:3000/api/category', {
        categoryName,
        categoryImage,
      });
      fetchData();
      setCategoryName('');
      setCategoryImage('');
      console.log('Category created successfully');
    } catch (error) {
      console.error('Error creating category:', error);
    }
  };

  return (
    <div className="block mx-auto p-5">
      <div className="mb-5 block">
        <TextField
          style={{ width: '550px' }}
          label="Category Name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
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
      {image && (
        <img
          src={image.dataURL}
          alt={image.name}
          style={{ width: '100px', height: '100px', margin: '5px' }}
        />
      )}
      <Button
        style={{ margin: '5px' }}
        variant="contained"
        color="primary"
        onClick={handleCreateCategory}
      >
        Create Category
      </Button>
      <div className="">
        {categories.map((category) => (
          <div key={category._id} className="flex items-center bg-white p-4 rounded shadow-md">
            <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
              <img
                src={category.categoryImage}
                alt={category.categoryName}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold ">{category.categoryName}</h3>
            <div className="ml-auto flex items-center">
              <IconButton
                onClick={() => handleDelete(category._id)}
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnterCategory;
