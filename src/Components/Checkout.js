// Checkout.js
import React from "react";
import { useCart } from "./CartContext";
import CSS from "../Components/Checkout.css";

function Checkout() {
  const { cart } = useCart();

  const totalPrice = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  const totalItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="checkout">
      {cart.length === 0 ? (
        <p>Your cart is empty. Add some items!</p>
      ) : (
        <div>
          <h3>Items in Cart:</h3>
          <p>Total Items: {totalItemCount}</p>{" "}
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: "50px", height: "auto" }}
                    />
                  </td>
                  <td>R{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>R{(item.price * item.quantity).toFixed(2)}</td>{" "}
                </tr>
              ))}
            </tbody>
          </table>
          <h4>Total Price: R{totalPrice}</h4>
        </div>
      )}
    </div>
  );
}

export default Checkout;
