import React, { useState, useEffect } from 'react';
import Abhishek from '../../assets/Icons/app.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './HomePage.css';
import API from '../API/masterAPI'



function HomePage() {
  const [password, setPassword] = useState('');
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [email,setEmail] = useState('');
  const [isTokenStored,setIsTokenStored] = useState(false);
  const baseApi = API();



  useEffect(() => {

    //check local storage for token
    if(localStorage.getItem("AuthToken")!=null)
    {
      setIsTokenStored(true);
      setEmail("");
      setPassword("");
    }
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
      setShowInstallPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        setDeferredPrompt(null);
        setShowInstallPrompt(false);
      });
    }
  };

  const handleEmailChange = (event)=>{

    setEmail(event.target.value);

  }
  const handlePasswordChange = (event)=>{

    setPassword(event.target.value);
  }

  const login = ()=>{

    const reqBody = {

      "email":email,
      "password":password

    }

    console.log("login called");

    //call login API using axios
    axios.post(`https://nearby-kart-admin-bakend.vercel.app/api/v1/login`, reqBody)
    .then((response) => {

      const message = response.data.message;
      if(message === "User not found")
      {
        alert(message);
      }

      else if(message === "Incorrect password")
      {

        alert(message);

      }
      else{

       localStorage.setItem("AuthToken",message);
       setIsTokenStored(true);
      
      }


    }).catch((err) => {

      alert(err.message);
      
    });

  }

  return (
    <div className="flex h-screen background">
      {/* Left Content */}
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="flex">
          <h1 className="text-2xl nearbykart-txt text-blue-500">Nearby</h1>
          <h1 className="text-2xl nearbykart-txt2 text-blue-500">Kart</h1>
        </div>
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
              value={email}
              onChange={handleEmailChange}
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
              onChange={handlePasswordChange}
            />
          </div>

          {!isTokenStored ? (
      <button
        onClick={login}
        className="bg-blue-500 login-btn hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Login
      </button>
    ) : (
      <Link to="/admin/bulkProduct" >
        <button className="bg-blue-500 login-btn hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">

        Continue to Admin Dashboard

        </button>
       
      </Link>
    )}
         
          <p className="text-sm mt-4">
            <Link to="/register">
              <button className="register-btn hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Register my Store
              </button>
            </Link>
          </p>
        </div>
      </div>

      {/* Popup for installing PWA */}
      {showInstallPrompt && (
        <div className="fixed inset-x-0 top-0 p-4 bg-gray-900 text-white text-center">
          <p className="mb-2">Install NearbyKart to your device for better experience.</p>
          <button
            className="bg-blue-500 px-4 py-2 rounded-lg mx-2 hover:bg-blue-600"
            onClick={handleInstall}
          >
            Install
          </button>
          <button
            className="bg-gray-600 px-4 py-2 rounded-lg mx-2 hover:bg-gray-700"
            onClick={() => setShowInstallPrompt(false)}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default HomePage;
