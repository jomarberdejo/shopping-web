import React from "react";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";
import { FaCheck } from "react-icons/fa"; 

export const AddCartButton = (props) => {
  const { state, dispatch } = useCart();

  const isProductInCart = state.cartItems.some((item) => item.id === props.id);

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", product: props });

    
      toast.success(
        `${props.title} added to cart.`
      );
    
  };

  return (
    <>
      <button
        className={`px-2 py-1 rounded bg-green-800 text-white cursor-pointer w-full block m-auto ${
          isProductInCart ? "disabled:opacity-50" : ""
        }`}
        onClick={addToCart}
        disabled={isProductInCart}
      >
        {isProductInCart ? (
          <div className= "flex gap-2 items-center justify-center" >
            <span>Added to Cart</span>
              <FaCheck className='inline'/> 
          
          </div>
        ) : (
          "Add to Cart"
        )}
      </button>
    </>
  );
};
