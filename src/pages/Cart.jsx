import { Link } from "react-router";
import '../styles/Cart.css'

import { useContext } from "react";
import { CartContext } from "../context/Cart.Context";


const Cart = () => {
  const {cart, increaseQuantity, decreaseQuantity, updateQuantity} = useContext(CartContext)
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>

      <div className="user-added">
        <div className="cart-header">
          <h3 className="cartHeader-product">Product</h3>
          <h3 className="cartHeader-productName">Product Name</h3>
          <h3 className="cartHeader-price">Unit Price</h3>
          <h3 className="cartHeader-quantity">Quantity</h3>
        </div>

        {cart.map((item) => (
        <div className="added-item" key={item.id}>
          <img
            src={item.image}
            alt={item.title}
            width="100"
            height="100"
          />

          <h4>{item.title}</h4>

          <p>${item.price}</p>

          <div className="cartUser-input">
            <button onClick={() => increaseQuantity(item.id)}>
              +
            </button>

            <input 
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, e.target.value)} 
            />

            <button onClick={() => decreaseQuantity(item.id)}>
              -
            </button>
          </div>
          

        </div>
      ))}
      </div>
      

      <h2>Total: ${total.toFixed(2)}</h2>

          <button>Checkout</button>
    </div>
  );
};

export default Cart
