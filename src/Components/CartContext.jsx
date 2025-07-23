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
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex(
        (cartItem) =>
          cartItem.name === item.name && cartItem.flavour === item.flavour
      );

      if (itemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[itemIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // ✅ Add this function to remove an item by index
  const removeFromCart = (indexToRemove) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
  
      // Decrease quantity
      if (updatedCart[indexToRemove].quantity > 1) {
        updatedCart[indexToRemove].quantity -= 1;
      } else {
        // Remove item if quantity becomes 0
        updatedCart.splice(indexToRemove, 1);
      }
  
      return updatedCart;
    });
  };
  

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
