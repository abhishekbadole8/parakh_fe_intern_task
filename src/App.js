import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const productsData = {
    data: [
      {
        name: "Cosmetics",
        productList: [
          { id: 0, name: "Hair Oil", price: 122 },
          { id: 1, name: "Face wash", price: 123 },
        ],
      },
      {
        name: "Household",
        productList: [
          { id: 2, name: "Hair Oil", price: 122 },
          { id: 3, name: "Face wash", price: 123 },
        ],
      },
    ],
  };

  // Add Clicked Product To Cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setCartCount(cart.length + 1);
    console.log(`Product added :${JSON.stringify(product)}`);
  };

  // Remove Clicked Product
  const removeFromCart = (product) => {
    setCart((prevCart) => {
      // finding 1st index of product match
      const productIndex = prevCart.findIndex((item) => item.id === product.id);
      if (productIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart.splice(productIndex, 1); 
        return updatedCart;
      }
      return prevCart;
    });

    setCartCount(prevCount => Math.max(prevCount - 1, 0))
    console.log(`Product Removed :${JSON.stringify(product)}`);
  };

  useEffect(() => {
    console.log(`List of products:${JSON.stringify(cart)}`);
  }, [cart]);

  return (
    <div className="App">
      <section>
        <div className="mycart">
          <h5>{cartCount}</h5>
        </div>

        <div className="products">
          {productsData.data.map((category, categoryIndex) => {
            return (
              <div className="product" key={categoryIndex}>
                <h4>{category.name}</h4>
                <hr />
                <div className="same-category">
                  {category.productList.map((product, id) => {
                    return (
                      <div className="card" key={id}>
                        <div>
                          <p>Name: {product.name}</p>
                          <p>Price: {product.price}</p>
                        </div>
                        <div className="buttons">
                          <button onClick={() => addToCart(product)}>
                            Add to Cart
                          </button>
                          <button onClick={() => removeFromCart(product)}>
                            Remove from Cart
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
