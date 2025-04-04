// CartContext.js
import React, { createContext, useState, useContext } from "react";

// Create Context
const CartContext = createContext();

// Custom hook to use CartContext
export const useCart = () => {
  return useContext(CartContext);
};

// CartProvider to wrap around the app and provide context
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Initial empty cart state

  const addToCart = (item) => {
    // Check if the item is already in the cart
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex(
        (cartItem) =>
          cartItem.name === item.name && cartItem.flavour === item.flavour
      );

      if (itemIndex !== -1) {
        // If the item exists, update its quantity
        const updatedCart = [...prevCart];
        updatedCart[itemIndex].quantity += 1; // Increment quantity
        return updatedCart;
      } else {
        // If the item doesn't exist, add it with quantity 1
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
