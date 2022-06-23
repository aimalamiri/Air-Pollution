import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Details from '../Pages/Details';
import Home from '../Pages/Home';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path=":city" element={<Details />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
