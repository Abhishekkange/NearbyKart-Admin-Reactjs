import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const EnterCategory = () => {
  const [categoryName, setCategoryName] = useState('');
  const [categoryImage, setCategoryImage] = useState('');
  const [categories, setCategories] = useState([]);
  const [previewImage, setPreviewImage] = useState('');


  // Fetch categories from API on component mount
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('YOUR_API_ENDPOINT'); // Replace with your API endpoint
      setCategories(response.data); // Assuming API returns an array of categories
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleCreateCategory = async () => {
    try {
      await axios.post('YOUR_API_ENDPOINT', { categoryName, categoryImage }); // Replace with your API endpoint
      fetchData(); // Refresh categories after adding new category
      setCategoryName('');
      setCategoryImage('');
    } catch (error) {
      console.error('Error creating category:', error);
    }
  };

  const handleDeleteCategory = async (categoryId) => {
    try {
      await axios.delete(`YOUR_API_ENDPOINT/${categoryId}`); // Replace with your API endpoint
      fetchData(); // Refresh categories after deleting a category
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  return (
    <div  className=" block mx-auto p-5 ">
      <div className="mb-5 block">
        <TextField
          style={{width:'550px'}}
          label="Category Name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          variant="outlined"
          className="mr-3 w-80"
        />
       
      </div>
      <Button style={{ margin: '5px' }} className="p-2 mx-5" variant="contained" component="label">
  Upload Image
  <input type="file" hidden onChange={(e) => {
    setCategoryImage(e.target.files[0]);
    setPreviewImage(URL.createObjectURL(e.target.files[0])); // Set preview image URL
  }} />
</Button>
{previewImage && (
  <img src={previewImage} alt="Selected" style={{ width: '100px', height: '100px', margin: '5px' }} />
)}
<Button style={{ margin: '5px' }} variant="contained" color="primary" onClick={handleCreateCategory}>
  Create Category
</Button>

      <Grid container spacing={3}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category.objectID}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={category.categoryImage} // Replace with your category image field
                alt={category.categoryName} // Replace with your category name field
              />
              <CardContent>
                <h3>{category.categoryName}</h3>
                <IconButton onClick={() => handleDeleteCategory(category.objectID)}>
                  <DeleteIcon />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default EnterCategory;
