import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const BrandsComponent = () => {
  const [brandName, setBrandName] = useState('');
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('YOUR_BRANDS_API_ENDPOINT');
      setBrands(response.data);
    } catch (error) {
      console.error('Error fetching brands:', error);
    }
  };

  const handleAddBrand = async () => {
    try {
      await axios.post('YOUR_BRANDS_API_ENDPOINT', { brandName });
      fetchData();
      setBrandName('');
    } catch (error) {
      console.error('Error adding brand:', error);
    }
  };

  const handleDeleteBrand = async (brandId) => {
    try {
      await axios.delete(`YOUR_BRANDS_API_ENDPOINT/${brandId}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting brand:', error);
    }
  };

  return (
    <div className="m-5">
      <div className="flex mb-5">
        <TextField
          style={{width:'500px'}}
          label="Brand Name"
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
          variant="outlined"
          className="mr-3"
        />
        <Button style={{margin:'5px',padding:'13px',width:'150px'}} variant="contained" color="primary" onClick={handleAddBrand}>
          Add Brand
        </Button>
      </div>
      <List>
        {brands.map((brand) => (
          <ListItem key={brand.objectID}>
            <ListItemText primary={brand.brandName} />
            <ListItemSecondaryAction>
              <IconButton onClick={() => handleDeleteBrand(brand.objectID)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default BrandsComponent;
