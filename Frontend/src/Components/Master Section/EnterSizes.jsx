import React, { useState, useEffect,useContext } from 'react';
import StoreContext from '../../Context/StoreContext'
import axios from 'axios';
import { TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import API from '../API/masterAPI';

const SizesComponent = () => {
  const [sizeName, setSizeName] = useState('');
  const [sizes, setSizes] = useState([]);
  const baseApi = API();

  useEffect(() => {
    fetchData();
  }, []);

  
  const storeId = localStorage.getItem('AuthToken');

  const fetchData = async () => {
    try {
      const headers = {
        'x-session-token': storeId,
        'Content-Type': 'application/json'
      };
  
    const config = {
        headers: headers,
       };
      const response = await axios.get(`${baseApi}size`,config);
      setSizes(response.data);
    } catch (error) {
      console.error('Error fetching sizes:', error);
    }
  };

  const handleAddSize = async () => {
    try {
      const headers = {
        'x-session-token': storeId,
        'Content-Type': 'application/json'
      };
  
    const config = {
        headers: headers,
       };
      await axios.post(`${baseApi}size`, { sizeName },config);
      fetchData();
      setSizeName('');
    } catch (error) {
      console.error('Error adding size:', error);
    }
  };

  const handleDeleteSize = async (sizeId) => {
    try {
      const headers = {
        'x-session-token': storeId,
        'Content-Type': 'application/json'
      };
  
    const config = {
        headers: headers,
       };
      await axios.delete(`${baseApi}size/${sizeId}`,config);
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
