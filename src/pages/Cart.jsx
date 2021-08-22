import React, { useContext, useState } from "react";
import { CartContext } from "../Components/context/CartContext";
import { v4 as uuidv4 } from 'uuid';

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  let found = cart.find((thing) => thing.title);

  const addOne = () => {
    if (quantity < 9) {
      setQuantity((prevQuantity) => prevQuantity + 1);
      found.qty = quantity + 1;
    }
  };

  const removeOne = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      found.qty = quantity - 1;
    }
  };

  const handleRemoveFromCart = (removeItem) => {
    setCart(cart.filter((x) => x.id !== removeItem.id));
  };

  return (
    <div>
      <h1>Cart</h1>
      <button
          onClick={(clearCart) => {
            setCart([]);
          }}
        >
          Clear Cart
        </button>
      {cart.map((item) => (
        <>
          <div className="cart-item-div" key={uuidv4()}>
            <div className="cart-item-img-div">
              <img className="cart-item-img" src={item.img[0].img} alt="" />
            </div>
            <div className="cart-item-details">
              <div className="cart-item-title">
                <h3>{item.title} qty: {found.qty}</h3>
              </div>

              <div className="cart-item-description">
                <p>{item.description}</p>
              </div>
            </div>

            <div className="cart-item-price">
              <span>${item.price}</span>
            </div>

            <div className="cart-number-input-div">
              <button onClick={removeOne}>-</button>
              <span>{quantity}</span>
              <button onClick={addOne}>+</button>
            </div>

            <div className="cart-item-price-total">
              <span>${item.price * quantity}</span>
            </div>

            <div className="cart-remove-item-btn">
              <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
            </div>
          </div>
          <hr />
        </>
      ))}
    </div>
  );
}
