// AdminPanel.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../../Components/Dashboard';
import Sidebar from '../../Components/Sidebar';
import AddBulkProduct from '../../Components/AddBulkProduct';
import Users from '../../Components/Users';

function AdminPanel() {
  return (
    <div className="flex w-full h-full flex-row">
      <Sidebar />
      <div className="p-5">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/bulkProduct" element={<AddBulkProduct />} />
          <Route path="/userProfile" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminPanel;
