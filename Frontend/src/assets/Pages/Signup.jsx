import React from 'react'
import RegisterInfo from '../../Components/Registration/RegisterInfo'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Setup from '../../Components/Registration/Setup';

function Signup() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RegisterInfo />} />
        <Route path="/setup" element={<Setup/>} />
      </Routes>
    </div>
  )
}



export default Signup
