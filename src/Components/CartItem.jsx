import React, { useContext, useEffect } from "react";
import { CartContext } from "./context/CartContext";

export default function CartItem({ cartItem }) {
  const { img, title, description, price, id, qty } = cartItem;
  const { cart, setCart, setTotal, setQuantity } = useContext(CartContext);

  let totalPriceItem = price * qty;

  // Calculating total price for for all items in cart combined
  useEffect(() => {
    let totalPrice = cart.map((element) => element.price * element.qty);
    let total = totalPrice.reduce((sum, curr) => {
      return sum + curr;
    });
    setTotal(total);
  });

  // Removing item from cart
  const handleRemoveFromCart = (removeItem) => {
    setCart(cart.filter((element) => element.id !== removeItem.id));
  };

  // Adding one ( + sign )
  const handleAddOne = (cartItem) => {
    if (cartItem.qty < 9) {
      setQuantity((prevQuantity) => prevQuantity + 1);
      let itemInCart = cart.find((newItem) => cartItem.title === newItem.title);
      if (itemInCart) {
        itemInCart.qty++;
      }
    }
  };

  // Removing one ( - sign )
  const handleRemoveOne = (cartItem) => {
    if (cartItem.qty > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      let itemInCart = cart.find((newItem) => cartItem.title === newItem.title);
      if (itemInCart) {
        itemInCart.qty--;
      }
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
          <button
            className="minus-btn"
            onClick={() => handleRemoveOne(cartItem)}
          >
            -
          </button>
          <span>{cartItem.qty}</span>
          <button className="plus-btn" onClick={() => handleAddOne(cartItem)}>
            +
          </button>
        </div>

        <div className="cart-item-price-total">
          <span>${totalPriceItem.toFixed(2)}</span>
        </div>

        <div className="cart-remove-item-btn-div">
          <button
            className="remove-btn"
            onClick={() => handleRemoveFromCart(cartItem)}
          >
            Remove
          </button>
        </div>
      </div>
      <hr />
    </>
  );
}
