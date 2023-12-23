import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./Pages/index.js";

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
        </Routes>
      </Router>
      

  );
}

export default App;
