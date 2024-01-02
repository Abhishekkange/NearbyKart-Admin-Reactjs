import React, { useState,useEffect } from 'react';
import { TextField, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ChromePicker } from 'react-color';
import axios, { Axios } from 'axios';

const AddColorComponent = () => {
  const [colorName, setColorName] = useState('');
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [addedColors, setAddedColors] = useState([]);

  const [storeId, setStoreId] = useState(''); // State to hold storeId
  const { storeId: contextStoreId } = useContext(StoreContext); // Retrieve StoreContext using useContext hook

  useEffect(() => {
    if (contextStoreId) {
      setStoreId(contextStoreId); // Get storeId from StoreContext
    }
  }, [contextStoreId]);

  useEffect(() => {
    fetchData();
  }, []);
  
    
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://nearby-kart-admin-bakend.vercel.app/api/${storeId}/color`);
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
    const response = await axios.post(`https://nearby-kart-admin-bakend.vercel.app/api/${storeId}/color`, { colorName,selectedColor }); 
    console.log('color Added successfully');
    setSelectedColor('#ffff')
    setColorName('');
    fetchData();


  };
  const handleDeleteColor = async (_id) => {
    console.log(id);

    try {
      const response = await axios.delete(`https://nearby-kart-admin-bakend.vercel.app/api/${storeId}/color`,{_id});
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
