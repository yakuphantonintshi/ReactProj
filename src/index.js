import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals.js";
import { CartProvider } from "./Components/CartContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
reportWebVitals();
