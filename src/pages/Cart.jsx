import React, { useContext } from "react";
import { CartContext } from "../Components/context/CartContext";
import { v4 as uuidv4 } from "uuid";
import CartItem from "../Components/CartItem";
import { useHistory } from 'react-router'

export default function Cart() {
  const { cart, setCart, total, setTotal } = useContext(CartContext);
  const history = useHistory()
  

  const displayCartItems = (cartItem) => {
    return <CartItem 
    key={uuidv4()} 
    cartItem={cartItem}
    />;
  };

  if(cart.length === 0){
    setTotal(0)
  }

  return (
    <div>
      <h1>Cart</h1>
      <h1>Total: ${total}</h1>
      {cart.length > 0 ? (
        <button
          className='clear-cart-btn'
          onClick={() => {
            setCart([]);
            setTotal(0)
          }}
        >
          Clear Cart
        </button>
      ) : null}
      <button onClick={()=>{history.push(`/Checkout`)}} className='go-to-checkout-btn'>Proceed to Checkout</button>
      <div className="item-container">{cart.map(displayCartItems)}</div>
    </div>
  );
}
