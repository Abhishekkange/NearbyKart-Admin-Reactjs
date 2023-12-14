// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';
import AdminPanel from '../src/assets/Pages/Admin';
import Login from './assets/Pages/Login';
import Signup from './assets/Pages/Signup';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminPanel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
