import React, { useState } from "react";
import { useCart } from "./CartContext.jsx";
import CSS from "../Components/Checkout.css";

function Checkout() {
  const { cart, addToCart, removeFromCart } = useCart();
  const [selectedItem, setSelectedItem] = useState(null);

  const totalPrice = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  const totalItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleViewDetails = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

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
                    <button onClick={() => removeFromCart(index)} className="delete">
                      <i className="bi bi-trash3"></i>
                    </button>
                    <button onClick={() => addToCart(item)} className="add">
                      <i className="bi bi-plus-square-fill"></i>
                    </button>
                    <button onClick={() => handleViewDetails(item)} className="view-details">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h4>Total Price: R{totalPrice}</h4>
        </div>
      )}

      {/* MODAL */}
      {selectedItem && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{selectedItem.name}</h2>
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              style={{ width: "100px", height: "auto", marginBottom: "10px" }}
            />
            <p>{selectedItem.description || "No description available."}</p>
            <p><strong>Calories:</strong> {selectedItem.calories} kcal</p>
            <p><strong>Energy:</strong> {selectedItem.energy} kJ</p>
            <button onClick={closeModal} className="close-modal">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
