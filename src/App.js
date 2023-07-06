import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Playground from './components/pages/Playground';
import SignUp from './components/pages/SignUp';
import Butt from './components/pages/Butt';
import Protected from './components/pages/Protected';
import Secret from './components/pages/Secret';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/services' element={<Services />}/>
         <Route path='/playground' element={<Playground />}/>
         <Route path='/sign-up' element={<SignUp />}/>
         <Route path='/butt' element={<Butt />}/>
         <Route path='/protected' element={<Protected />}/>
         <Route path='/secret' element={<Secret />}/>
        </Routes>
        
      </Router>
    </>
  );
}

export default App;
