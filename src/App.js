import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Counter from './features/counter/Counter';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Routes>
        <Route path="/" element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;
