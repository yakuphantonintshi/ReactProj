import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); 

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

  const removeFromCart = (indexToRemove) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
  
      if (updatedCart[indexToRemove].quantity > 1) {
        updatedCart[indexToRemove].quantity -= 1;
      } else {
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
