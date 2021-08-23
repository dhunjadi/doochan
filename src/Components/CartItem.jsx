import React, { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";

export default function CartItem({ cartItem }) {

  const { img, title, description, price, id } = cartItem;
  const { cart, setCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const item = cartItem;

  const handleRemoveFromCart = (removeItem) => {
    setCart(cart.filter((element) => element.id !== removeItem.id));
  };

  const handleAddOne = () => {
    if (quantity < 9) {
      setQuantity((prevQuantity) => prevQuantity + 1);
      
    }
  };

  const handleRemoveOne = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      
    }
  };

  return (
    <>
      <div key={id} className="cart-item-div">
        <div className="cart-item-img-div">
          <img className="cart-item-img" src={img[0].img} alt="" />
        </div>
        <div className="cart-item-details">
          <div className="cart-item-title">
            <h3>{title}</h3>
          </div>

          <div className="cart-item-description">
            <p>{description}</p>
          </div>
        </div>

        <div className="cart-item-price">
          <span>${price}</span>
        </div>

        <div className="cart-number-input-div">
              <button onClick={handleRemoveOne}>-</button>
              <span>{quantity}</span>
              <button onClick={handleAddOne}>+</button>
            </div>

        <div className="cart-item-price-total">
          <span>${price * quantity}</span>
        </div>

        <div className="cart-remove-item-btn">
          <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
        </div>
      </div>
      <hr />
    </>
  );
}
