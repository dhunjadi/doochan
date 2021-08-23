import React, { useContext } from "react";
import { CartContext } from "../Components/context/CartContext";
import { v4 as uuidv4 } from "uuid";
import CartItem from "../Components/CartItem";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const displayCartItems = (cartItem) => {
    return <CartItem 
    key={uuidv4()} 
    cartItem={cartItem}
    />;
  };

  return (
    <div>
      <h1>Cart</h1>
      <h1>Total: $</h1>
      {cart.length > 0 ? (
        <button
          onClick={() => {
            setCart([]);
          }}
        >
          Clear Cart
        </button>
      ) : null}
      <div className="item-container">{cart.map(displayCartItems)}</div>
    </div>
  );
}
