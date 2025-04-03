import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link>Checkout</Link>
        </li>
        <li>
          <Link>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
