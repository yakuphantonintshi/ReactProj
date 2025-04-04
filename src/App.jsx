import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Products from "./pages/Products.jsx";
import Home from "./pages/Homepage.jsx";
import HomeCss from "./Components/home.css";
import Nav from "./Components/Nav.jsx";
import Checkout from "./Components/Checkout.js";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/checkout" element={<Checkout />} />
        {/* <Route exact path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
