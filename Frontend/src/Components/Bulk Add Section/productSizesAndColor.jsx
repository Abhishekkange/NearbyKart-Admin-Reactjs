import React, { useContext } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import ProductContext from '../../Context/ProductContext';

const ProductColorsTable = () => {
    const { productState } = useContext(ProductContext);
    const { colorSizes } = productState;

    const renderColorSizes = () => {
        return Object.entries(colorSizes).map(([color, sizes], index) => (
            <TableRow key={index}>
                <TableCell>{color}</TableCell>
                <TableCell>{sizes.join(', ')}</TableCell>
            </TableRow>
        ));
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Color</TableCell>
                        <TableCell>Sizes</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>{renderColorSizes()}</TableBody>
            </Table>
        </TableContainer>
    );
};

export default ProductColorsTable;
