
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


