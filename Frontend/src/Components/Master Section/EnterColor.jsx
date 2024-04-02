import React, { useState, useEffect,useContext } from 'react';
import StoreContext from '../../Context/StoreContext'
import { TextField, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ChromePicker } from 'react-color';
import axios, { Axios } from 'axios';
import API from '../API/masterAPI';

const AddColorComponent = () => {
  const [colorName, setColorName] = useState('');
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [addedColors, setAddedColors] = useState([]);

  const storeId = localStorage.getItem('AuthToken');
  const baseApi = API();


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
          const response = await axios.get(`${baseApi}color`,config);
          setAddedColors(response.data);
        } catch (error) {
          console.error('Error fetching brands:', error);
        }
      };
    

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };

  const handleAddColor = async() => {
   
    //API call here
    const headers = {
      'x-session-token': storeId,
      'Content-Type': 'application/json'
    };

  const config = {
      headers: headers,
     };

    const response = await axios.post(`${baseApi}color`, { colorName,selectedColor },config); 
    setSelectedColor('#ffff')
    setColorName('');
    fetchData();


  };
  const handleDeleteColor = async (_id) => {
  
    const headers = {
      'x-session-token': storeId,
      'Content-Type': 'application/json'
    };

  const config = {
      headers: headers,
     };

    try {
      const response = await axios.delete(`${baseApi}color`,{_id},config);
      fetchData(); // Fetch updated data after deletion
    } catch (error) {
      console.error('Error deleting color:', error);
      // Handle error (e.g., show a message to the user, log, etc.)
    }
  };
  return (
    <div className="">
      <div className="m-4  flex ">
        <TextField
          label="Color Name"
          value={colorName}
          onChange={(e) => setColorName(e.target.value)}
          variant="outlined"
        />
        
      <button
        className="bg-blue-500 justify-center align-middle hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-4"
        onClick={handleAddColor}
      >
        Add Color
      </button>
      </div>

      <div className="m-4">
        <ChromePicker color={selectedColor} onChange={handleColorChange} />
      </div>


      <List style={{ width: '100%', maxWidth: 400 }}>
        {addedColors.map((color) => (
          <ListItem key={color._id}>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full mr-4" style={{ backgroundColor: color.selectedColor }} />
              <ListItemText primary={color.colorName} />
              <ListItemText primary={color.selectedColor} />
              <ListItemSecondaryAction>
                <IconButton onClick={() => handleDeleteColor(color._id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </div>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default AddColorComponent;
