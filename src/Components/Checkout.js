// Checkout.js
import React from "react";
import { useCart } from "./CartContext.jsx";
import CSS from "../Components/Checkout.css";

function Checkout() {
  const { cart, addToCart, removeFromCart } = useCart();

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
          <div className="popup-badge">
  🛒 {totalItemCount} item{totalItemCount !== 1 ? "s" : ""} in cart
</div>

          <p>Total Items: {totalItemCount}</p>
          <table>
  <thead>
    <tr>
      <th>Product</th>
      <th>Image</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Total</th>
      <th>Actions</th>
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
        <td>R{(item.price * item.quantity).toFixed(2)}</td>
        <td>
          <button onClick={() => removeFromCart(index)} className="delete"><i class="bi bi-trash3"></i></button>
          <button onClick={() => addToCart(item)} className="add"><i class="bi bi-plus-square-fill"></i></button>
        </td>
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
