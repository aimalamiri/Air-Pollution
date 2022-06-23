import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Details from './Pages/Details';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App bg-gradient-to-bl from-blue-300 to-blue-700 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":city" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
