import { Link } from "react-router";

import { useContext } from "react";
import { CartContext } from "../context/Cart.Context";


const Cart = () => {
  const {cart, increaseQuantity, decreaseQuantity} = useContext(CartContext)
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div>
      <h1>Your Cart</h1>

      {cart.map((item) => (
        <div key={item.id}>
          <img
            src={item.image}
            alt={item.title}
            width="80"
          />

          <h3>{item.title}</h3>

          <p>${item.price}</p>

          <p>Quatity: {item.quantity}</p>

          <button onClick={() => increaseQuantity(item.id)}>
            +
          </button>

          <span>{item.quantity}</span>

          <button onClick={() => decreaseQuantity(item.id)}>
            -
          </button>

        </div>
      ))}

      <h2>Total: ${total.toFixed(2)}</h2>

          <button>Checkout</button>
    </div>
  );
};

export default Cart
