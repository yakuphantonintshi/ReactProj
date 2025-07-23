import React from "react";
import Card from "./Card.css";
import { useCart } from "./CartContext";

function IceCreamCard({ name, flavour, image, price, button, button2 }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const item = { name, flavour, image, price };
    addToCart(item);
  };
  return (
    <div className="card">
      <h3>{name}</h3>
      <img className="img" src={image} alt={name} />
      <p>R{price}</p>
      <div>
        <button className="view-details" onClick={handleAddToCart}>{button2}</button>
        <button className="add-to-cart" onClick={onViewMore}>
          {button}
        </button>
      </div>
    </div>
  );
}

export default IceCreamCard;
