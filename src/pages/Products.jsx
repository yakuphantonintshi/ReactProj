import Card from "../Components/Card"
import iceCreamData from "../IceCreamData.js";

function Products() {
    return (
      <div className="ice-cream-container">
        {iceCreamData.map((iceCream) => (
          <Card
            key={iceCream.id}
            name={iceCream.name}
            flavour={iceCream.flavour}
            image={iceCream.image}
            price={iceCream.price}
            button={iceCream.button}
            button2={iceCream.button2}
          />
        ))}
      </div>
    );
  }
export default Products;