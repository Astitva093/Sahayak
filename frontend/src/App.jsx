import react from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Home/Dashboard';
import Interview from './pages/Interviewprep/Interviewprep';


const App = () => {
  return (
    <div ><Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Interviewprep" element={<interviewprep />} />
      </Routes>
    </Router>
    



    
    </div>
  )
}
export default App;