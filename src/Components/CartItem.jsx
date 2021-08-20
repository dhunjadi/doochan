import React, { useState } from "react";

export default function CartItem(props) {
  const { img, title, description, price, id, cart, setCart } = props;

  let found = cart.find((thing) => thing.title);

  const [quantity, setQuantity] = useState(1);

  const handleRemoveFromCart = (toremove) => {
    console.log(cart);
  };

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


  return (
    <>
      <div key={id} className="cart-item-div">
        <div className="cart-item-img-div">
          <img className="cart-item-img" src={img[0].img} alt="" />
        </div>
        <div className="cart-item-details">
          <div className="cart-item-title">
            <h3>
              {title} qty: {found.qty}
            </h3>
          </div>

          <div className="cart-item-description">
            <p>{description}</p>
          </div>
        </div>

        <div className="cart-item-price">
          <span>${price}</span>
        </div>

        <div className="cart-number-input-div">
          <button onClick={removeOne}>-</button>
          <span>{quantity}</span>
          <button onClick={addOne}>+</button>
        </div>

        <div className="cart-item-price-total">
          <span>${price * quantity}</span>
        </div>

        <div className="cart-remove-item-btn">
          <button onClick={handleRemoveFromCart}>Remove</button>
        </div>
      </div>
      <hr />
    </>
  );
}
