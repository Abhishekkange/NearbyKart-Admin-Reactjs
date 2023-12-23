import React, { useContext, useState,useEffect } from 'react';
import axios from "axios";

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Select,
    MenuItem,
    Button,
    Grid,
    IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import productContext from '../../Context/ProductContext';



const ColorSizeSelector = () => {



    const {productState,setProductState} = useContext(productContext);

    

    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColors, setSelectedColors] = useState([]);
    const [colorSizes, setColorSizes] = useState({});
    const [colorsFromApi, setColorsFromApi] = useState([]);
    const [sizesFromApi, setSizesFromApi] = useState([]);


  useEffect(() => {
    fetchColorsFromApi();
    fetchSizesFromApi();
  }, []);

  const fetchColorsFromApi = async () => {
    try {
      const response = await axios.get('https://nearby-kart-admin-bakend.vercel.app/api/AllColors');
      setColorsFromApi(response.data);
    } catch (error) {
      console.error('Error fetching colors:', error);
    }
  };

  const fetchSizesFromApi = async () => {
    try {
      const response = await axios.get('https://nearby-kart-admin-bakend.vercel.app/api/AllSizes');
      setSizesFromApi(response.data);
    } catch (error) {
      console.error('Error fetching sizes:', error);
    }
  };

    

    const updatedProductState = {
        ...productState,
        colorSizes: { ...colorSizes }, // Add colorSizes to the productState
    };

    const handleSaveButton = () => {

        setProductState(updatedProductState);
        console.log(productState);

    };


    const colors = ['Red', 'Blue', 'Green','Yellow'];
    const sizes = ['S', 'M', 'L', 'XL'];



    const handleColorAdd = () => {
        if (selectedColor) {
            setSelectedColors([...selectedColors, selectedColor]);
        }
    };

    const handleSizeAdd = () => {
        if (selectedColor && selectedSize) {
            setColorSizes({
                ...colorSizes,
                [selectedColor]: colorSizes[selectedColor]
                    ? [...colorSizes[selectedColor], selectedSize]
                    : [selectedSize],
            });
            setSelectedSize('');
        }
    };

    const handleDeleteColor = (color) => {
        setSelectedColors(selectedColors.filter((c) => c !== color));
        const updatedSizes = { ...colorSizes };
        delete updatedSizes[color];
        setColorSizes(updatedSizes);
    };

    return (
        <>
                <Grid container justifyContent="center" alignItems="center" spacing={2}>
            <Grid item xs={12} md={6}>
                <div className="mt-2">
                    <Select
                        fullWidth
                        value={selectedColor}
                        onChange={(e) => setSelectedColor(e.target.value)}
                    >
                        <MenuItem value="">Select Color</MenuItem>
                        {colorsFromApi.map((color, index) => (
                            <MenuItem key={index} value={color}>
                                {color}
                            </MenuItem>
                        ))}
                    </Select>
                    <Button
                    style={{ margin: '10px',width:'200px' }}
                    variant="contained"
                    onClick={handleColorAdd}
                    className='bg-blue-500 mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline'
                >
                    Add Color
                </Button>
                </div>
            </Grid>
            <Grid item xs={12} md={6}>
                <Select
                    style={{ marginTop: '3px' }}
                    fullWidth
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                >
                    <MenuItem value="">Select Size</MenuItem>
                    {sizesFromApi.map((size, index) => (
                        <MenuItem key={index} value={size}>
                            {size}
                        </MenuItem>
                    ))}
                </Select>
                <Button
                    style={{ margin: '10px',width:'200px' }}
                    variant="contained"
                    onClick={handleSizeAdd}
                    className='bg-blue-500 mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline'
                >
                    Add Size
                </Button>
            </Grid>
            <Grid item xs={12}>
                {selectedColors.length > 0 && (
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Color</TableCell>
                                    <TableCell>Sizes</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {selectedColors.map((color, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{color}</TableCell>
                                        <TableCell>
                                            {colorSizes[color] &&
                                                colorSizes[color].join(', ')}
                                        </TableCell>
                                        <TableCell>
                                            <IconButton
                                                aria-label="delete"
                                                onClick={() =>
                                                    handleDeleteColor(color)
                                                }
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </Grid>
        </Grid>
        <button onClick={handleSaveButton} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 ml-2 rounded focus:outline-none focus:shadow-outline">
                Save and Continue
            </button>
        
        </>


        
    );
};

export default ColorSizeSelector;
