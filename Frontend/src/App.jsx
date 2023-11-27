import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import './App.css'
import Dashboard from './Components/Dashboard';
import Sidebar from './Components/Sidebar';
import AddBulkProduct from './Components/AddBulkProduct';
import UserProfile from './Components/userProfileSection/UserProfile';
function App() {
  return (
    <div className='flex w-full h-full flex-row'>
      <Router>
        <div>
          <Sidebar />
        </div>
        <div className='p-5'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/bulkProduct' element={<AddBulkProduct />} />
            <Route path='/UserProfile' element={<UserProfile/>} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
