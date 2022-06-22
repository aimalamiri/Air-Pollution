import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Details from './Pages/Details';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":city" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
