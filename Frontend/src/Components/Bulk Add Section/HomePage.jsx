import React, { useState } from 'react';
import Abhishek from '../../assets/Icons/app.png'
import './HomePage.css';
import { Link } from 'react-router-dom';



function HomePage() {

  const[password,setPassword] =useState();
  

  

  const Login = ()=>{

    // call login APi using Axio






  }


  return (
    <div className="flex h-screen background">
      {/* Left Content */}
      <div className="w-1/2 flex flex-col justify-center items-center">
        
        <div className="flex">
        <h1 className="text-2xl nearbykart-txt text-blue-500">Nearby</h1>
        <h1 className="text-2xl nearbykart-txt2 text-blue-500">Kart</h1>


        </div>
        {/* <h1 className="text-2xl nearbykart-txt text-blue-500">NearbyKart</h1> */}
        <img src={Abhishek} alt="Your Image" className="myImage" />
      </div>

      {/* Right Content */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Login </h2>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
             
            />
          </div>
          <Link to="/admin/bulkProducts">
          <button className="bg-blue-500 login-btn hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Login
          </button>
     
    </Link>
          
          <p className="text-sm mt-4">

          <Link to="/register">
          <button className=" register-btn hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Register my Store 
          </button>
          </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
