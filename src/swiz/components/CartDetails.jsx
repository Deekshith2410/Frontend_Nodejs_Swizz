
import React from "react";

const CartDetails = ({ cart, totalAmount, setShowCart }) => {
  return (
    <div className="cartDetails">
      <h4>🛒 Cart Details</h4>
      <button onClick={() => setShowCart(false)}>Close</button>
      <ul>
        {Object.values(cart).map((item) => (
          <li key={item.productId}>
            <div>
              <strong>{item.productName}</strong>
            </div>
            <div>
              Price: ₹{parseFloat(item.price).toFixed(2)} <br />
              Quantity: {item.quantity}
            </div>
          </li>
        ))}
      </ul>
      <div>
        <strong>Total:</strong> ₹{totalAmount.toFixed(2)}
      </div>
    </div>
  );
};

 export default CartDetails;


// // import React, { useState } from "react";

// // // Memoized CartItem component
// // const CartItem = React.memo(({ item }) => {
// //   console.log(`Rendering: ${item.productName}`); // Debug: shows what re-renders

// //   return (
// //     <li>
// //       <div>
// //         <strong>{item.productName}</strong>
// //       </div>
// //       <div>
// //         Price: ₹{parseFloat(item.price).toFixed(2)} <br />
// //         Quantity: {item.quantity}
// //       </div>
// //     </li>
// //   );
// // });

// // // CartDetails component
// // const CartDetails = ({ cart, totalAmount, setShowCart }) => {
// //   return (
// //     <div className="cartDetails">
// //       <h4>🛒 Cart Details</h4>
// //       <button onClick={() => setShowCart(false)}>Close</button>
// //       <ol>
// //         {Object.values(cart).map((item) => (
// //           <CartItem key={item.productId} item={item} />
// //         ))}
// //       </ol>
// //       <div>
// //         <strong>Total:</strong> ₹{totalAmount.toFixed(2)}
// //       </div>
// //     </div>
// //   );
// // };

// // // Main App
// // const App = () => {
// //   const [cart, setCart] = useState({});
// //   const [showCart, setShowCart] = useState(false);

// //   const products = [
// //     { productId: 1, productName: "Biryani", price: 120 },
// //     { productId: 2, productName: "Pizza", price: 200 },
// //     { productId: 3, productName: "Burger", price: 80 },
// //   ];

// //   const addToCart = (product) => {
// //     setCart((prevCart) => {
// //       const existingItem = prevCart[product.productId];

// //       return {
// //         ...prevCart,
// //         [product.productId]: existingItem
// //           ? { ...existingItem, quantity: existingItem.quantity + 1 }
// //           : { ...product, quantity: 1 },
// //       };
// //     });
// //   };

// //   const totalAmount = Object.values(cart).reduce(
// //     (sum, item) => sum + item.price * item.quantity,
// //     0
// //   );

// //   return (
// //     <div style={{ padding: "20px" }}>
// //       <h2>🍽️ Menu</h2>
// //       <ul>
// //         {products.map((product) => (
// //           <li key={product.productId}>
// //             {product.productName} - ₹{product.price}{" "}
// //             <button onClick={() => addToCart(product)}>Add</button>
// //           </li>
// //         ))}
// //       </ul>

// //       <button onClick={() => setShowCart(true)}>View Cart</button>

// //       {showCart && (
// //         <CartDetails
// //           cart={cart}
// //           totalAmount={totalAmount}
// //           setShowCart={setShowCart}
// //         />
// //       )}
// //     </div>
// //   );
// // };

// // export default App;


