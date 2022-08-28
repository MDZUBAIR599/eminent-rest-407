import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Createsurvey from './Components/createsurvey';
import Dashborad from './Components/Dashborad';
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import Signup from './Components/Signup';


function App() {
  return (
    <div className="App">
      <Box>
      <Routes>
          <Route path="/" element={<Homepage />}  />
          <Route path="/dashboard" element={<Dashborad />}  />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/createsurvey" element={<Createsurvey />} />
          
      </Routes>
       </Box>
    </div>
  );
}

export default App;
