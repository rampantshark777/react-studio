import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState(new Map());
  // const increment = () => {
  //   setCart(cart + 1);
  // };
  const updateCart = (name) => {
    // if (!(name in cart.keys)) {
    if (!cart.has(name)) {
      setCart(
        (prevCart) => {
          const newMap = structuredClone(cart.set(name, 1));
          return newMap;
        }
        // ["description", description],
        // ["price", price],
      );
      // cart.push({
      //   [name: name,
      //   description: description,
      //   price: price,
      //   image: image,
      //   index: index,
      //   number: 1,]
      // })

      console.log(cart);
    } else {
      setCart((prevCart) => {
        const newCart = structuredClone(cart.set(name, cart.get(name) + 1));
        return newCart;
      });
    }
  };

  const keys = [...Array.from(cart.keys())];

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      {bakeryData.map(
        (
          item,
          index // TODO: map bakeryData to BakeryItem components
        ) => (
          <div>
            <BakeryItem
              name={item.name}
              description={item.description}
              price={item.price}
              index={index}
              image={item.image}
            ></BakeryItem>
            <button onClick={() => updateCart(item.name)}></button>
          </div>
        )
      )}
      <div>
        <h2>Cart</h2>
        {keys.map((key) => (
          <p>
            {key} {cart.get(key)}
          </p>
        ))}
        {/* TODO: render a list of items in the cart */}
      </div>
    </div>
  );
}

export default App;
