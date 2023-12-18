// AdminPanel.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../../Components/Dashboard';
import Sidebar from '../../Components/Sidebar';
import AddBulkProduct from '../../Components/AddBulkProduct';
import Users from '../../Components/Users';
import ProductData from '../../Components/Bulk Add Section/ProductData';
import Master from '../../Components/Master';

function AdminPanel() {
  return (
    <div className="flex w-full h-full flex-row">
      <Sidebar />
      <div className="">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/bulkProduct" element={<AddBulkProduct />} />
          <Route path="/userProfile" element={<Users />} />
          <Route path="/productdata" element={<ProductData />} />
          <Route path="/Master" element={<Master />} />

        </Routes>
      </div>
    </div>
  );
}

export default AdminPanel;
