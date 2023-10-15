import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { FaDollarSign } from "react-icons/fa";

const Cart = () => {
  const { state, dispatch, clearCart } = useCart();

  const incrementItem = (productId) => {
    dispatch({ type: "INCREMENT_ITEM", productId });
  };

  const decrementItem = (productId) => {
    dispatch({ type: "DECREMENT_ITEM", productId });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", productId });
  };

  const handleClearCart = () => {
    clearCart();
  }


  
  const total = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)

  return (
    <div className="max-w-4xl m-auto w-[90%]">
      <p className=" flex items-center gap-1 relative py-4 px-2 justify-end">
        <span className="flex items-center gap-1 font-bold text-gray-800 text-xl border-2 border-gray-950 p-2 rounded bg-white">Total: <FaDollarSign /> {total}</span>
      </p>
      <h2 className="text-gray-800 text-center text-2xl font-semibold mt-4 mb-4">Your Cart</h2>
      <ul>
        {state.cartItems.map((item) => (
          <li key={item.id} className="shadow-lg my-4 p-4 bg-white text-zinc-900  max-w-full mx-auto">
            <div className="flex justify-between items-center gap-1">
              <div className="flex items-center">
                <img src={item.image} alt={item.title} className="w-12 h-12 mr-4" />
                <span className="text-lg">{item.title}</span>
              </div>
              <div className="flex items-center space-x-2">
                <button onClick={() => decrementItem(item.id)} className="w-5 bg-blue-500 text-white px-1 rounded-sm focus:outline-none hover:bg-blue-600">-</button>
                <span className="text-xl">{item.quantity}</span>
                <button onClick={() => incrementItem(item.id)} className="w-5 bg-blue-500 text-white px-1 rounded-sm focus:outline-none hover:bg-blue-600">+</button>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-gray-600 font-bold">${item.price} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}</p>

            </div>
            <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white p-1 mt-2 rounded-sm focus:outline-none hover:bg-red-600">Remove</button>
          </li>
        ))}
      </ul>

      {state.cartItems.length > 0 ? (
        <div>
        
        <button onClick={()=> alert("Payment integration will be added soon.")} className="cart-buttons-style">Purchase Now</button>
        
         <button onClick={handleClearCart} className="cart-buttons-style">Clear Cart</button>
          
         
        </div>
      

        
      ) : <p className='mt-10 text-lg text-center  text-zinc-900'> Your cart is empty. </p>}



    </div>
  );
};

export default Cart;