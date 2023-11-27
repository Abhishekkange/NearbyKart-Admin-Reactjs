import React, { useState, useEffect } from 'react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, TextField } from '@mui/material';

const AdminPanel = () => {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    // Fetch data from your API
    fetch('https://dummyjson.com/products/1')
      .then(response => response.json())
      .then(data => {
        setData(data);

        // Extract column names dynamically from the first object in the array
        if (data.length > 0) {
          const columnNames = Object.keys(data[0]);
          setColumns(columnNames);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
        <h1>Hello wirkd</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {/* Render table headers dynamically */}
              {columns.map(column => (
                <TableCell key={column}>
                  <TextField label={column} variant="standard" />
                  {/* You can use any other filter UI component here */}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Render table rows dynamically */}
            {data.map((row, index) => (
              <TableRow key={index}>
                {columns.map(column => (
                  <TableCell key={column}>{row[column]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminPanel;
