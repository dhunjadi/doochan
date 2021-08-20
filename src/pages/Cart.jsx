import React from "react";
import CartItem from "../Components/CartItem";

export default function Cart({ cart, setCart}) {

  const sumItUp = () =>{
    return cart.reduce((sum, {price}) => sum + price, 0)
  }
    
  const displayCartItems = (cartItem) => {
    const { img, title, description, price, id } = cartItem;

    return (
      <CartItem
        key={id}
        img={img}
        title={title}
        description={description}
        price={price}
        cart={cart}
        setCart={setCart}
      />
    );
  };

  return (
    <div>
      <h1>Cart</h1>
      {cart.length > 0 ? <button onClick={(clearCart) =>{
        setCart([])
      }}>Clear Cart</button> 
       : null}
       <h1>Total: ${sumItUp()}</h1>
      {cart ? cart.map(displayCartItems) : null}
    </div>
  );
}


