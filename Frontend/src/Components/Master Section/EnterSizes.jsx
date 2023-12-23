import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const SizesComponent = () => {
  const [sizeName, setSizeName] = useState('');
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://nearby-kart-admin-bakend.vercel.app/api/size');
      setSizes(response.data);
    } catch (error) {
      console.error('Error fetching sizes:', error);
    }
  };

  const handleAddSize = async () => {
    try {
      await axios.post('https://nearby-kart-admin-bakend.vercel.app/api/size', { sizeName });
      fetchData();
      setSizeName('');
    } catch (error) {
      console.error('Error adding size:', error);
    }
  };

  const handleDeleteSize = async (sizeId) => {
    try {
      await axios.delete(`https://nearby-kart-admin-bakend.vercel.app/api/size/${sizeId}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting size:', error);
    }
  };

  return (
    <div className="m-5">
      <div className="flex mb-5">
        <TextField
          style={{ width: '500px' }}
          label="Size Name"
          value={sizeName}
          onChange={(e) => setSizeName(e.target.value)}
          variant="outlined"
          className="mr-3"
        />
        <Button style={{ margin: '5px', padding: '13px', width: '150px' }} variant="contained" color="primary" onClick={handleAddSize}>
          Add Size
        </Button>
      </div>
      <List>
        {sizes.map((size) => (
          <ListItem key={size._id}>
            <ListItemText primary={size.sizeName} />
            <ListItemSecondaryAction>
              <IconButton onClick={() => handleDeleteSize(size._id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SizesComponent;
