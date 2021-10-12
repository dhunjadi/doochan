import React, { useContext } from "react";
import { CartContext } from "../Components/context/CartContext";
import { v4 as uuidv4 } from "uuid";
import CartItem from "../Components/CartItem";
import { useHistory } from "react-router";

export default function Cart() {
  const { cart, setCart, total } = useContext(CartContext);
  const history = useHistory();

  const displayCartItems = cart.map(cartItem => {
    return <CartItem key={uuidv4()} cartItem={cartItem} />;
  })


  return cart.length > 0 ? (
    <div>
      <h1 className="cart-total">Total: ${total.toFixed(2)}</h1>
      <div className="cart-btns-div">
        <button
          className="clear-cart-btn"
          onClick={() => {
            setCart([]);
          }}
        >
          Clear Cart
        </button>
        <button
          onClick={() => {
            history.push(`/Checkout`);
          }}
          className="go-to-checkout-btn"
        >
          Proceed to Checkout
        </button>
      </div>

      <div className="item-container">{displayCartItems}</div>
    </div>
  ) : (
    <h1>Your cart is empty</h1>
  );
}
