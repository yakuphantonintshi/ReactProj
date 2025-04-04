import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Components/CartContext";

function Nav() {
  const { cart } = useCart();

  const totalItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout ({totalItemCount})</Link>{" "}
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
