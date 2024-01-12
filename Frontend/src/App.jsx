

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';
import AdminPanel from '../src/assets/Pages/Admin';
import Login from './assets/Pages/Login';
import Signup from './assets/Pages/Signup';
import Home from './Components/Bulk Add Section/HomePage'


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/admin/*" element={<AdminPanel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Regsiter" element={<Signup />} />
       
      </Routes>
    </Router>

  )}

export default App;
