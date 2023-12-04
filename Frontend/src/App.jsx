import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';
import Dashboard from './Components/Dashboard';
import Sidebar from './Components/Sidebar';
import AddBulkProduct from './Components/AddBulkProduct';
import Users from './Components/Users';

function App() {
  return (
    <div className='flex flex-row' style={{ minHeight: '100vh' }}>
      <Router>
        <div className='bg-black' style={{ flex: '0 0 auto' }}>
          <Sidebar />
        </div>
        <div className='p-5' style={{ flex: '1', overflow: 'hidden' }}>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/bulkProduct' element={<AddBulkProduct />} />
            <Route path='/userProfile' element={<Users />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
