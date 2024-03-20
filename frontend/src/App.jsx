import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import History from './pages/History';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <div className='all'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/history' element={<History/>}/>
        <Route path='/login' element={<Login/>}/>
        {/* Define other routes here if needed */}
      </Routes>
      </div>
    </Router>
  );
};

export default App;
