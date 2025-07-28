import React, { useState } from "react";
import "./Card.css";
import { useCart } from "./CartContext.jsx";

function IceCreamCard({ name, flavour, image, price, button, button2, calories, description }) {
  const { addToCart } = useCart();
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    const item = { name, flavour, image, price, calories, description };
    addToCart(item);
  };

  const handleViewMore = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="card">
        <h3>{name}</h3>
        <img className="img" src={image} alt={name} />
        <p>R{price}</p>
        <div>
          <button className="view-details" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="add-to-cart" onClick={handleViewMore}>
            View More
          </button>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-p">{name}</h2>
            <img src={image} alt={name} className="modal-img" />
            <p className="modal-p"><strong>Flavour:</strong> {flavour}</p>
            <p className="modal-p"><strong>Price:</strong> R{price}</p>
            <p className="modal-p"><strong>Calories:</strong> {calories}</p>
            <p className="modal-p"><strong>Description:</strong> {description}</p>
            <button onClick={handleCloseModal} className="close-btn">Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default IceCreamCard;
