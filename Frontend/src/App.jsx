import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import './App.css'
import Dashboard from './Components/Dashboard';
import Sidebar from './Components/Sidebar';
import AddBulkProduct from './Components/AddBulkProduct';
import Users from './Components/Users';
function App() {
  return (
    <div className='flex w-screen h-screen flex-row'>
      <Router>
        <div className='h-screen bg-black'>
          <Sidebar />
        </div>
        <div className='p-5'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/bulkProduct' element={<AddBulkProduct />} />
            <Route path='/' element={<Dashboard />} />
            <Route path='/userProfile' element={<Users />} />
           
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App
