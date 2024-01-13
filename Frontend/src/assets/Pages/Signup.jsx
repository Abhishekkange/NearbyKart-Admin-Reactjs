
import storeImg from '../../assets/Icons/organisation.png'
import storeLogo from '../../assets/Icons/storeimg.png'
import TextField from '@mui/material/TextField';

function Signup() {
  return <>
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      {/* Left side of the Navbar */}
      <div className="text-white font-popins text-xl">
        Create Digital Store
      </div>

      {/* Right side of the Navbar */}
      <div className="text-white">
        <a href="/login" className="hover:underline">
          Login
        </a>
      </div>
    </nav>


    {/* //Top store */}
    <div className="flex">

      <div className="ml-20 mt-12">
        <div className="flex justify-between">

          <p>Business Logo</p>


        </div>
        <img style={{width:'100px',margin:'10px'}} src={storeLogo} alt="Store Logo" />
        <button>Add Image</button>



      </div>

      <div className="ml-12 mt-12">
        <div className="flex justify-between">

          <p>store Image</p>


        </div>
        <img style={{width:'100px',margin:'10px'}} src={storeImg} alt="Store Logo" />
        <button>Add Image</button>

        

      </div>





    </div>

    <div className=" block mx-auto p-5 ">
    <TextField style={{width:'350px',margin:'10px',marginLeft:'70px',marginTop:'30px'}}
        label="Business Legal Name"
        variant="outlined"
        margin="normal"
       
      />

<TextField style={{width:'350px',margin:'10px',marginLeft:'70px',marginTop:'30px'}}
        label="Create store Name"
        variant="outlined"
        margin="normal"
       
      />

<TextField style={{width:'350px',margin:'10px',marginLeft:'70px',marginTop:'30px'}}
        label=""
        variant="outlined"
        margin="normal"
       
      />

<TextField style={{width:'350px',margin:'10px',marginLeft:'70px',marginTop:'30px'}}
        label=""
        variant="outlined"
        margin="normal"
       
      />
    </div>
  </>
}

export default Signup;