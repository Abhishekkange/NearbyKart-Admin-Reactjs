import React, { useState,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';
import AdminPanel from '../src/assets/Pages/Admin';
import Login from './assets/Pages/Login';
import Signup from './assets/Pages/Signup';
import Home from './Components/Bulk Add Section/HomePage'
import SplashScreen from './Components/SplashScreen';






function App() {

  const [loading,setLoading] = useState(true);


  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2000 milliseconds = 2 seconds
  }, []);

  return (
    <Router>
    {loading ? (
      <SplashScreen />
    ) : (
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<Home />} />
        <Route path="/admin/*" element={<AdminPanel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register/*" element={<Signup />} />
        {/* Add more routes as needed */}
      </Routes>
    )}
  </Router>
);
    }

export default App;
