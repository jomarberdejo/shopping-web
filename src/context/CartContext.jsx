import React, { createContext, useContext, useReducer, useEffect } from "react";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
};

const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  const clearCart = () => {
    localStorage.clear();
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider value={{ state, dispatch, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.product.id
      );

      if (existingIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingIndex].quantity++;
        return { ...state, cartItems: updatedCartItems };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.product, quantity: 1 }],
        };
      }

    case "REMOVE_FROM_CART":
      const itemToRemoveIndex = state.cartItems.findIndex(
        (item) => item.id === action.productId
      );

      if (itemToRemoveIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems.splice(itemToRemoveIndex, 1);
        return { ...state, cartItems: updatedCartItems };
      } else {
        return state;
      }

    case "INCREMENT_ITEM":
      const incrementIndex = state.cartItems.findIndex(
        (item) => item.id === action.productId
      );

      if (incrementIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[incrementIndex].quantity++;
        return { ...state, cartItems: updatedCartItems };
      } else {
        return state;
      }

    case "DECREMENT_ITEM":
      const decrementIndex = state.cartItems.findIndex(
        (item) => item.id === action.productId
      );

      if (decrementIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[decrementIndex].quantity--;
        if (updatedCartItems[decrementIndex].quantity < 1) {
          updatedCartItems.splice(decrementIndex, 1);
        }
        return { ...state, cartItems: updatedCartItems };
      } else {
        return state;
      }

    case "CLEAR_CART":
      return { ...state, cartItems: [] };

    default:
      return state;
  }
};
