import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import './App.css'
import Dashboard from './Components/Dashboard';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className=''>
      <Router>
        <div className='flex'>
          <Sidebar />
          <div className='max-w-full w-full p-5'>
            <Routes>
              <Route path='/' element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
