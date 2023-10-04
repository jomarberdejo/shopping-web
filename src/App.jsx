import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Category from './components/Category';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
const App = () => {
    return (_jsx(_Fragment, { children: _jsxs(Router, { children: [_jsx(Navbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HeroSection, {}) }), _jsx(Route, { path: "/category", element: _jsx(Category, {}) }), _jsx(Route, { path: "/cart", element: _jsx(Cart, {}) }), _jsx(Route, { path: "/single/:id", element: _jsx(SingleProduct, {}) })] })] }) }));
};
export default App;
