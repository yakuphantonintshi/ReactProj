import Card from "../Components/Card"
import iceCreamData from "../IceCreamData.js";
import creams from "../Components/Card.css"

function Products() {
    return (
      <div className="icecreambuttons">

        <a><button className="regular">Regular Icecream</button></a>
        <a><button className="vegan">Vegan Icecream</button></a>
     
      <div className="wrapper">
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
      </div>
      </div>
    );
  }
export default Products;