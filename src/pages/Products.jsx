import React, { useState } from "react";
import Card from "../Components/Card";
import iceCreamData from "../IceCreamData.js";
import "../Components/Card.css";

function Products() {
  const [filter, setFilter] = useState("all"); // 'all', 'vegan', 'regular'
  const [selectedIceCream, setSelectedIceCream] = useState(null); // for modal

  const filteredIceCreams = iceCreamData.filter((item) => {
    if (filter === "vegan") return item.vegan;
    if (filter === "regular") return !item.vegan;
    return true;
  });

  const closeModal = () => setSelectedIceCream(null);

  return (
    <div>
      <div className="icecreambuttons">
        <button className="regular" onClick={() => setFilter("regular")}>
          Regular Ice Cream
        </button>
        <button className="vegan" onClick={() => setFilter("vegan")}>
          Vegan Ice Cream
        </button>
        {/* <button className="all" onClick={() => setFilter("all")}>
          Show All
        </button> */}
      </div>

      <div className="wrapper">
        <div className="ice-cream-container">
          {filteredIceCreams.map((iceCream) => (
            <Card
              key={iceCream.id}
              name={iceCream.name}
              flavour={iceCream.flavour}
              image={iceCream.image}
              price={iceCream.price}
              description={iceCream.description}
              calories={iceCream.calories}
              onViewMore={() => setSelectedIceCream(iceCream)} // open modal
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedIceCream && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{selectedIceCream.name}</h2>
            <img
              src={selectedIceCream.image}
              alt={selectedIceCream.name}
              style={{ width: "100px", height: "auto", marginBottom: "10px" }}
            />
            <p>{selectedIceCream.description}</p>
            <p><strong>Calories:</strong> {selectedIceCream.calories} kcal</p>
            <p><strong>Energy:</strong> {selectedIceCream.energy} kJ</p>
            <button onClick={closeModal} className="close-modal">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
