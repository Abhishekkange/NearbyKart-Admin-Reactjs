import React from 'react';
import TextField from '@mui/material/TextField';
import storeImg from '../../assets/Icons/organisation.png';
import storeLogo from '../../assets/Icons/storeimg.png';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FlashOnIcon from '@mui/icons-material/FlashOn';



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
      <div style={{ display: 'flex' }} className="mx-auto p-5 ">

        <div style={{ width: '400px' }} className="leftside">

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

          <div className="general Details p-2 mr-3 mt-6">

            <h1 className='ml-2'><strong>General Details</strong></h1>

            <TextField
              style={{ width: '360px', margin: '5px' }}
              label="Business Legal Name"
              variant="outlined"
              margin="normal"
              required
            />

            <TextField
              style={{ width: '360px', margin: '5px' }}
              label="Create store Name"
              variant="outlined"
              margin="normal"
              required
            />

            <TextField
              style={{ width: '360px', margin: '5px' }}
              label="Store Owner Name"
              variant="outlined"
              margin="normal"
              required
            />

            <TextField
              style={{ width: '360px', margin: '5px' }}
              label="Mobile Number"
              variant="outlined"
              type="tel"
              required
            />
            <TextField
              style={{ width: '360px', margin: '5px' }}
              label="Create a Password"
              margin="normal"
              type='password'
              required
            />



          </div>


        </div>

        <div className="rightSide">

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

            <div className="">

              <div className='flex'>


                <TextField
                  style={{ width: '360px', margin: '5px' }}
                  label="Instagram "
                  variant="outlined"
                  margin="normal"
                />
                <img style={{ width: '40px', height: '40px', margin: '10px' }} src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfehRxVQEg4XuSXxyhD5Erq5ZI0ndE-OLbYUTHlskSl_kWEQfA87OvTgOh5g9k3lBypIzmXbsqHotZQ-lQrYobQhZK3y5_Ji4O5tf-Rz2w9UkC_aLF4Z6u_0mW_lO1b8tZ4iQNz43O95dirIzyBOii2_GUraaW3iDWxmigW2tr8uejREJN95BN_8MUah0/s225/instalogo.jpg" alt="instagram icon" />

              </div>


              <div className='flex'>


                <TextField
                  style={{ width: '360px', margin: '5px' }}
                  label="facebook "
                  variant="outlined"
                  margin="normal"
                />
                <img style={{ width: '40px', height: '40px', margin: '10px' }} src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWQUPEQTUgMClZekuaPKYDkQ6tUYVPXR9IMo7EodZnFfLSH9o2uft2BvcHZ_JgjaqsIVhWpKylu4Pdn00NOlYj6hgfLclv28h45Z-qh12Mlwt2JqoP01eKbavjMtNTlaFbCk3mWfzss8gn3x0RvWt1YPxIMOd_QzSoQ2yzJHsmcUKtTSk69s4m5b_TqKM/s225/fblogo.png" alt="facebook icon" />

              </div>



            </div>






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
