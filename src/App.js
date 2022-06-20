import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Details from './Pages/Details';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
