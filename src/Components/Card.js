import React from "react";
import Card from "./Card.css";

function CardComp() {
  return (
    <div className="card">
    <div className="card-content">
      <h3>Card Title</h3>
      <p>Some description</p>
      <img
        src="https://cdn-prd-02.pnp.co.za/sys-master/images/h99/h0d/11522140405790/silo-product-image-v2-16Nov2024-180106-6009198001091-Straight_on-268217-1743_515Wx515H"
        alt="vanilla"
        className="vanilla"
      />
      <div className="myButtons">
        <a>
          <button className="button1">View Product</button>
        </a>
        <button className="button1">Add To Cart</button>
      </div>
    
    </div>
    </div>
  );
}

export default CardComp;
