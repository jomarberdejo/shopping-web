import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Category from './components/Category/Category';
import SingleProduct from './components/Product/SingleProduct';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/Hero/HeroSection';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/category" element={<Category />} />
        <Route path="/single/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
