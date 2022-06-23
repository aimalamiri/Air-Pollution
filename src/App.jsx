import React from 'react';
import Navbar from './Components/Navbar';
import AnimatedRoutes from './Components/AnimatedRoutes';

function App() {
  return (
    <div className="App bg-gradient-to-bl from-blue-300 to-blue-700 min-h-screen">
      <Navbar />
      <AnimatedRoutes />
    </div>
  );
}

export default App;
