import React from 'react'
import '../../assets/Pages/Signup.css';
import { Link } from 'react-router-dom';



function RegisterInfo() {
  return (
    

    <div>
        
    
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
        {/* Left side of the Navbar */}

        <div className="text-white font-popins text-xl">Nearbykart </div>


        {/* Right side of the Navbar */}
        
      </nav>

      <div className="container mx-auto mt-8 px-4">
      {/* Utilizing Tailwind CSS classes to style the heading */}
      <h1 style={{fontWeight:500}} className="text-gray-800 text-4xl font-sans font-normal">How to create Digital Store on NearbyKart ?</h1>

      <div style={{margin:'20px'}} className="infos">

      <div style={{display:'flex'}} className="step">

<div className="number">
        <h1>1</h1>
</div>
<div className="text">
    <div className="title">
        <h2>Fill up Required Information</h2>

    </div>
    <div className="para">
        <p>Follow the process and provide us wityh relevent information about your business and store.</p>

    </div>
</div>
</div>
<div style={{display:'flex'}} className="step">

<div className="number">
<h1>2</h1>
</div>
<div className="text">
<div className="title">
<h2>We'll Verify Your Information</h2>

</div>
<div className="para">
<p>Our Team will verify the Details you provided and setup a Digital store for You. This will take upto 1-2 working Days.</p>

</div>
</div>
</div>
<div style={{display:'flex'}} className="step">

<div className="number">
<h1>3</h1>
</div>
<div className="text">
<div className="title">
<h2>Get verified and start selling</h2>

</div>
<div className="para">
<p>Once you are verified, you will get your store's Login credentials. You can login to NearbyKart Merchant and start setting up your digital store.</p>

</div>
</div>
</div>

</div>




      </div>

     <div className="container mx-auto mt-8">
        {/* Linking to the route "/Register/step1" */}
        <Link to="/Register/setup">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Begin Registration
          </button>
        </Link>
      </div>
    


    </div>
  )
}

export default RegisterInfo
