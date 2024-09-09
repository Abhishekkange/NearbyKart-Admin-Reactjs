import React from 'react';
import { Card, CardContent, TextField, Button } from '@mui/material';
import image from '../Icons/image.jpeg';
import axios from 'axios';


const LoginPage = () => {


  
const login = async (username, password) => {
  try {
    const response = await axios.post('https://nearby-kart-admin-bakend.vercel.app/api/v1/login', {
      username,
      password,
    });

    // Assuming the API responds with a token or user data
    const { data } = response;
    
    // Process the response data as needed
    return data;

  } catch (error) {
    // Handle error cases here
    if (error.response) {
     
      
      console.error('Response Error:', error.response.data);
      console.error('Response Status:', error.response.status);
    } else if (error.request) {
     
      console.error('Request Error:', error.request);
    } else {
    
      console.error('Error:', error.message);
    }
    throw error;
  }
};





  return (
    <div className="min-h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          filter: 'brightness(0.5)', // Adjust brightness to your preference
        }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="flex justify-end">
          <Card elevation={5} className="rounded-lg w-full md:w-80" style={{ width: '450px',height:'300px',marginLeft:'750px' }}>
            <CardContent>
              <form className="space-y-6">
                <div>
                  <TextField
                    label="Username"
                    variant="outlined"
                    required
                    className="mb-4"
                    style={{ margin: '10px', width: '400px' }}
                  />
                  <TextField
                    type="password"
                    label="Password"
                    variant="outlined"
                    required
                    className="mb-4"
                    style={{ margin: '10px', width: '400px' }}
                  />
                </div>
                <Button variant="contained" color="primary" fullWidth>
                  Next
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
