import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Components/Dashboard';
import Homepage from '../Components/Homepage';
import Login from '../Components/Login';
import Signup from '../Components/Signup';
function Allroutes() {
  return (
    <div>
    <Box>
    <Routes>
        <Route path="/" element={<Homepage />}  />
        <Route path="/dashboard" element={<Dashboard />}  />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
    </Routes>
     </Box>
  </div>
  )
}

export default Allroutes
