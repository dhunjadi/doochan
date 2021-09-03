import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../Components/context/CartContext";
import { v4 as uuidv4 } from "uuid";

export default function CheckoutScreen() {
  const [countryList, setCountryList] = useState([]);
  const [tax] = useState(5);
  const { cart, total } = useContext(CartContext);

  useEffect(() => {
    fetch("http://restcountries.eu/rest/v2/all")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCountryList(data);
      });
  }, []);

  const showCountries = (country) => {
    return <option key={uuidv4()}>{country.name}</option>;
  };

  return (
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
          <p>First name:</p>
          <input type="text" />
          <p>Last name:</p>
          <input type="text" />
          <p>Telephone number:</p>
          <input type="tel" />
          <p>E-mail address:</p>
          <input type="email" />
          <p>Country</p>
          <select name="country" id="">
            {countryList.map(showCountries)}
          </select>
          <p>Delivery address:</p>
          <input type="text" />
          <p>City / Town:</p>
          <input type="text" />
          <p>Postcode:</p>
          <input type="text" />
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
          <span>${total}</span>
        </div>
        <div className="tax">
          <p>Tax</p>
          <span>$5</span>
        </div>
        <div className="order-total">
          <p>ORDER TOTAL</p>
          <span>${total + tax}</span>
        </div>
      </div>
      <div className="payment-details">
        <h1>Payment Details</h1>
        <div className="card-info">
          <p>Name on Card</p>
          <input type="text" />
          <p>Credit Card Number:</p>
          <input type="tel" />
          <div className="valid-cvv">
            <div className="valid">
              <p>Valid Through</p>
              <input type="text" />
            </div>
            <div className="cvv">
              <p>CVV</p>
              <input type="text" />
            </div>
          </div>
        </div>
        <button className='pay-btn'>PAY ${total + tax}</button>
      </div>
    </div>
  );
}
