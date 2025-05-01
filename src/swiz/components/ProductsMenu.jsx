
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TopBar from "./TopBar";
import CartDetails from "./CartDetails";
import SignInPanel from "./SignInPanel";


const ProductMenu = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);
  const [count, setCount] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const { firmId, firmName } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://backend-nodejs-suby.onrender.com/product/${firmId}/products`
        );
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Product fetch failed:", error);
      }
    };

    fetchProducts();
  }, [firmId]);

  const handleAdd = (item) => {
    const itemPrice = parseFloat(item.price);
    const updatedCart = { ...cart };

    if (updatedCart[item.productId]) {
      updatedCart[item.productId].quantity += 1;
    } else {
      updatedCart[item.productId] = { ...item, quantity: 1 };
    }

    setCart(updatedCart);
    setCount((prev) => prev + 1);
    setTotalAmount((prev) => prev + itemPrice);
  };

  const handleRemove = (item) => {
    const itemPrice = parseFloat(item.price);
    const updatedCart = { ...cart };

    if (updatedCart[item.productId]) {
      updatedCart[item.productId].quantity -= 1;
      setCount((prev) => prev - 1);
      setTotalAmount((prev) => prev - itemPrice);

      if (updatedCart[item.productId].quantity <= 0) {
        delete updatedCart[item.productId];
      }

      setCart(updatedCart);
    }
  };

  return (
    <>
      <TopBar
       onSignInClick={() => setShowSignIn(true)}
        onCartClick={() => setShowCart(!showCart)}
      />

      {showSignIn && <SignInPanel onClose={() => setShowSignIn(false)} />}

      <section className="productSection">
        <h3>{firmName}</h3>

        {count > 0 && (
          <div className="cartSummary">
            <strong>Items in Cart:</strong> {count} <br />
            <strong>Total Amount:</strong> ₹{totalAmount.toFixed(2)}
          </div>
        )}

        {showCart && count > 0 && (
          <CartDetails
            cart={cart}
            totalAmount={totalAmount}
            setShowCart={setShowCart}
          />
        )}

        {products.map((item) => {
          const quantity = cart[item.productId]?.quantity || 0;

          return (
            <div key={item.productId} className="productBox">
              <div>
                <strong>{item.productName}</strong>
                <br />
                ₹{item.price}
                <br />
                {item.description}
              </div>
              <div className="productGroup">
                <img
                  src={`https://backend-nodejs-suby.onrender.com/uploads/${item.image}`}
                  alt={item.productName}
                />
                <div className="quantityControls">
                  <button onClick={() => handleAdd(item)}>+</button>
                  <span>Add</span>
                  <button onClick={() => handleRemove(item)}>-</button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ProductMenu;
