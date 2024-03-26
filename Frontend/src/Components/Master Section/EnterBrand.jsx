import React, { useState, useEffect,useContext } from 'react';
import StoreContext from '../../Context/StoreContext'
import axios from 'axios';
import { TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const BrandsComponent = () => {
  const [brandName, setBrandName] = useState('');
  const [brands, setBrands] = useState([]);


  
  const storeId = localStorage.getItem('AuthToken');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const headers = {
        'x-session-token': storeId,
        'Content-Type': 'application/json'
      };
  
    const config = {
        headers: headers,
       };

      const response = await axios.get(`https://nearby-kart-admin-bakend.vercel.app/api/brand`,config);
      setBrands(response.data);
    } catch (error) {
      console.error('Error fetching brands:', error);
    }
  };


  const handleAddBrand = async () => {
    try {

      const headers = {
        'x-session-token': storeId,
        'Content-Type': 'application/json'
      };
  
    const config = {
        headers: headers,
       };

      await axios.post(`https://nearby-kart-admin-bakend.vercel.app/api/brand`, { brandName },config);
      fetchData();
      setBrandName('');
    } catch (error) {
      console.error('Error adding brand:', error);
    }
  };

  const handleDeleteBrand = async (brandId) => {
    try {

      const headers = {
        'x-session-token': storeId,
        'Content-Type': 'application/json'
      };
  
    const config = {
        headers: headers,
       };
      await axios.delete(`https://nearby-kart-admin-bakend.vercel.app/api/brand/${brandId}`,config);
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
          <ListItem key={brand._id}>
            <ListItemText primary={brand.brandName} />
            <ListItemSecondaryAction>
              <IconButton onClick={() => handleDeleteBrand(brand._id)}>
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
