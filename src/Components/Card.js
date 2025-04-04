import React from "react";
import Card from "./Card.css";
import { useCart } from "../Components/CartContext";

function IceCreamCard({ name, flavour, image, price, button, button2 }) {
  const { addToCart } = useCart(); // Get addToCart method from context

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
        <button className="view-details">{button2}</button>
        <button className="add-to-cart" onClick={handleAddToCart}>
          {button}
        </button>
      </div>
    </div>
  );
}

export default IceCreamCard;
