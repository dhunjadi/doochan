import React, { useState, useContext } from "react";
import { CartContext } from "../Components/context/CartContext";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router";

export default function CheckoutScreen() {
  const [creditCardNumber, setCreditCardNumber] = useState();
  const [expiryDate, setExpiryDate] = useState();
  const { cart, total } = useContext(CartContext);
  const history = useHistory();

  const normalizeCardNumber = (value) => {
    setCreditCardNumber(
      value
        .replace(/\s/g, "")
        .match(/.{1,4}/g)
        ?.join(" ")
        .substr(0, 19) || ""
    );
  };

  let delivery = total > 200 ? 0 : 10

  return (
    <>
      <h2 className="back-to-cart" onClick={() => history.push(`/Cart`)}>
        Back to Cart
      </h2>
      <div id="checkout-screen">
        <div className="order-review">
          <h1>Review your order</h1>
          {cart.map((item) => {
            return (
              <div key={uuidv4()} className="item-review">
                <img src={item.img[0].img} alt={item.title} />
                <div className="item-info">
                  <p>{item.title}</p>
                  <span>Price:${item.price}</span>
                  <span>Qty: {item.qty}</span>
                  <span>Total: ${item.price * item.qty}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="delivery-info">
          <h1>Delivery information</h1>
          <form>
            <div className="pair">
              <label>First name:</label>
              <input type="text" />
            </div>
            <div className="pair">
              <label>Last name:</label>
              <input type="text" />
            </div>
            <div className="pair">
              <label>Telephone number:</label>
              <input type="tel" />
            </div>
            <div className="pair">
              <label>E-mail address:</label>
              <input type="email" />
            </div>
            <div className="pair">
              <label>Delivery address:</label>
              <input type="text" />
            </div>
            <div className="pair">
              <label>City / Town:</label>
              <input type="text" />
            </div>
            <div className="pair">
              <label>Postcode:</label>
              <input type="text" />
            </div>
          </form>
        </div>
        <div className="order-summary">
          <h1>Order Summary</h1>
          {cart.map((item) => {
            return (
              <div key={uuidv4()} className="item-summary">
                <p>
                  {item.qty} x {item.title}
                </p>
                <span>${item.qty * item.price}</span>
              </div>
            );
          })}
          <div className="subtotal">
            <p>Subtotal</p>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="delivery-price">
            <p>Delivery</p>
            { total > 200 ? <span>FREE DELIVERY</span> : <span> ${delivery} </span> }
          
          </div>
          <div className="order-total">
            <p>ORDER TOTAL</p>
            <span>${(total + delivery).toFixed(2)}</span>
          </div>
        </div>
        <div className="payment-details">
          <h1>Payment Details</h1>
          <div className="card-info">
            <div className="pair">
              <label>Name on Card</label>
              <input type="text" />
            </div>
            <div className="pair">
              <label htmlFor="cardNumber">Credit Card Number:</label>
              <input
                type="tel"
                placeholder="0000 0000 0000 0000"
                inputMode="numeric"
                name="cardNumber"
                id="cardNumber"
                value={creditCardNumber}
                onChange={(e) => {
                  const { value } = e.target;
                  e.target.value = normalizeCardNumber(value);
                }}
              />
            </div>
            <div className="valid-cvv">
              <div className="valid">
                <label>Expiry Date</label>
                <input
                  type="tel"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={(e) => {
                    setExpiryDate(e.target.value);
                  }}
                />
              </div>
              <div className="cvv">
                <label>CVV</label>
                <input type="text" />
              </div>
            </div>
          </div>
          <button className="pay-btn">PAY ${(total + delivery).toFixed(2)}</button>
        </div>
      </div>
    </>
  );
}
