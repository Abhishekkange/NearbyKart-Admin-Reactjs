import React from 'react';
import TextField from '@mui/material/TextField';
import storeImg from '../../assets/Icons/organisation.png';
import storeLogo from '../../assets/Icons/storeimg.png';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import InputAdornment from '@mui/material/InputAdornment';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Typography from '@mui/material/Typography';

import './Signup.css';


function Signup() {

  const [openingTime, setOpeningTime] = React.useState(null);
  const [closingTime, setClosingTime] = React.useState(null);


  return (
    <>
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        {/* Left side of the Navbar */}
        <div className="text-white font-popins text-xl">Create Digital Store</div>

        {/* Right side of the Navbar */}
        <div className="text-white">
          <a href="/login" className="hover:underline">
            Login
          </a>
        </div>
      </nav>



      {/* Input fields stacked vertically */}
      <div style={{ display: 'flex' }} className="mx-auto p-5  ">

        <div style={{ width: '800px', marginRight: '70px' }} className="leftside  ">

    <div className="imageinput">
{/* Top section with Business Logo and Store Image */}
<div style={{ marginBottom: '10px' }} className="flex ml-5">

<div className="mr-8">
  <div className="flex justify-between">
    <p>Business Logo</p>
  </div>
  <img style={{ width: '80px', margin: '5px' }} src={storeLogo} alt="Store Logo" />
  <Button

    variant="contained"
    color="primary"
    startIcon={<CameraAltIcon />}
  >
    Add Logo
  </Button>
</div>

<div>
  <div className="flex justify-between">
    <p>Store Image</p>
  </div>
  <img style={{ width: '80px', height: '77px', margin: '5px' }} src={storeImg} alt="Store Logo" />
  <Button
    variant="contained"
    color="primary"
    startIcon={<CameraAltIcon />}
  >
    Store Image
  </Button>
</div>
</div>
    </div>
          

          <div className="general Details p-2 mr-3 mt-6">

            <h1 className='ml-2'><strong>General Details</strong></h1>

            <TextField
              style={{ width: '460px', margin: '5px' }}
              label="Business Legal Name"
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />

<div className="flex">

<TextField
              style={{ width: '460px', margin: '5px' }}
              label="Create store Name"
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />


</div>
           

            <TextField
              style={{ width: '460px', margin: '5px' }}
              label="Store Owner Name"
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />

<TextField
      label="Short Description"
      variant="outlined"
      multiline
      rows={3}
      fullWidth
      style={{ width: '460px',marginLeft:'5px',marginTop:'5px' }} // Set your desired width here
    />

           



          </div>


        </div>

        <div className="rightSide mt-5">

          <div className="Registration">

          <h1 className='ml-2'><strong>Registration Details</strong></h1>


          <div className="flex">
              <TextField
                style={{ width: '360px', margin: '5px' }}
                label="Mobile Number"
                variant="outlined"
                type="tel"
                required
              />
              <Button
                style={{
                  marginTop: '15px',
                  marginLeft: '20px',
                  background: '#f0f0f0',
                  width: '120px',
                  textTransform: 'lowercase',
                  height: '40px',
                }}
              >
                <Typography style={{ color: "black",fontSize:'14px' }} variant="h6" align="center">
                  Verify
                </Typography>
              </Button>

            </div>

            <TextField
              style={{ width: '360px', margin: '5px' }}
              label="Create a Password"
              margin="normal"
              type='password'
              required
            />



          </div>

          <div className="Address p-2 mb-3">

            <h1 className='ml-2'><strong>Address</strong></h1>

            <TextField
              style={{ width: '360px', margin: '5px' }}
              label="Address 1"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              style={{ width: '360px', margin: '5px' }}
              label="Address 2"
              variant="outlined"
              margin="normal"
            />
            <TextField
              style={{ width: '360px', margin: '5px' }}
              label="city"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              style={{ width: '360px', margin: '5px' }}
              label="Pincode"
              variant="outlined"
              margin="normal"
              required
            />


          </div>



          <div className="socialLinks">
            <h1 className='ml-3'><strong>Social Links</strong></h1>

          

              <TextField
                style={{ margin: '10px' }}

                label="Instagram "
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <InstagramIcon />
                    </InputAdornment>
                  ),
                }}
              />


              <TextField
                style={{ margin: '10px' }}
                label="facebook"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <FacebookIcon />
                    </InputAdornment>
                  ),
                }}
              />



          






          </div>


          <div className="ml-2 mt-3" >

            <Button style={{ padding: '15px' }}
              variant="contained"
              color="primary"

              startIcon={<FlashOnIcon />}
            >
              Get started with Free Plan
            </Button>


          </div>





        </div>

      </div>
    </>
  );
}

export default Signup;
