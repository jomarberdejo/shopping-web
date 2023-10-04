import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './context/CartContext';
import { QueryClientProviderWrapper } from './context/QueryClientContext';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProviderWrapper>
      <CartProvider>
        <App />
      </CartProvider>
    </QueryClientProviderWrapper>
    <ToastContainer /> 
  </React.StrictMode>
);
