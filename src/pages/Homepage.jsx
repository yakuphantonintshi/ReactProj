import React from "react";

function Homepage() {
  return (
    <header>
      <div className="header">
        {/* <img src="ice_cream-removebg-preview.png" alt="ice cream"></img> */}
      </div>
      <div className="main">
        <h1 className="cone">Cone</h1>
        <h1 className="and"> &</h1>
        <h1 className="cream">Cream</h1>
        <a href="./products">
          <button className="products">View Products</button>
        </a>
      </div>
    </header>
  );
}

export default Homepage;
