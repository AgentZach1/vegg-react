import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import PilotProject from './components/pages/PilotProject';
import OurTeam from './components/pages/OurTeam';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
         <Route path='/vegginc' element={<Home />}/>
         <Route path='/pilotproject' element={<PilotProject />}/>
         <Route path='/ourteam' element={<OurTeam />}/>
         <Route path='/sign-up' element={<SignUp />}/>
        </Routes>
        
      </Router>
    </>
  );
}

export default App;
