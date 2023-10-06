import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Category from './components/Category/Category';
import SingleProduct from './components/Product/SingleProduct';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/Hero/HeroSection';
import NotFound from './components/NotFound/NotFound';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/category" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/single/:id" element={<SingleProduct />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
};

export default App;
