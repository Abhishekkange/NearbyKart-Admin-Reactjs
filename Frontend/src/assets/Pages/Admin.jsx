// AdminPanel.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../../Components/Dashboard';
import Sidebar from '../../Components/Sidebar';
import AddBulkProduct from '../../Components/AddBulkProduct';
import Users from '../../Components/Users';
import ProductData from '../../Components/Bulk Add Section/ProductData';
import Master from '../../Components/Master';
import ProductState from "../../Context/ProductState";
import StoreProductGrid from "../../Components/Store Section/StoreProductsGrid"
import ProductDisplayGrid from '../../Components/Add to store section/ProductDisplayGrid'
function AdminPanel() {
  return (
    <ProductState>
   <div className="flex w-full h-full flex-row">
      <Sidebar />
      <div className="">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/bulkProduct" element={<AddBulkProduct />} />
          <Route path="/userProfile" element={<Users />} />
          <Route path="/productdata" element={<ProductData />} />
          <Route path="/Master" element={<Master />} />
          <Route path="/allproducts" element={<ProductDisplayGrid />} />
          <Route path="/store" element={<StoreProductGrid />} />

        </Routes>
      </div>
    </div>

    </ProductState>
   
  );
}

export default AdminPanel;
