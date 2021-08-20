import React, { useState } from "react";
import { useParams } from "react-router";

export default function ItemScreen(props) {
  const { cart, setCart, fetchedData } = props;
  const { id } = useParams();
  const item = fetchedData[`${id - 1}`];

  const [picture, setPicture] = useState(item.img[0].img);

  const handlePictureClick = (e) => {
    setPicture(e.target.currentSrc);
  };

  const createMorePictures = (picture) => {
    return (
      <div key={picture.img} className="more-pictures">
        <img
          onClick={handlePictureClick}
          className="more-pictures-pic"
          src={picture.img}
          alt={picture.title}
        />
      </div>
    );
  };

  const handleAddToCart = (item) => {
    console.log(item)
    setCart([...cart, item]);
  };

  const handleRemoveFromCart = (removeItem) => {
    setCart(cart.filter(item => item !== removeItem))
    console.log(cart)
}



  return (
    <div id="item-screen">
      <div className="item-img-div">
        <div className="item-img">
          {" "}
          <img src={picture} alt="" />{" "}
        </div>
        <div className="item-price">
          <p>{item.price}</p>
        </div>
        <div className="item-details">
          <p className="item-title">{item.title}</p>
          <p className="item-description">{item.description}</p>
          <div className="buttons">
            <button
              onClick={() => handleAddToCart(item)} 
              className="add-to-cart-btn-item"
            >
              Add To Cart
            </button>
            <button
              onClick={() => handleRemoveFromCart(item)} // Doesn't work in CartItem.jsx
              className="add-to-cart-btn-item"
            >
              Remove from cart
            </button>
          </div>
        </div>
      </div>
      <div className="more-pictures-div">
        {item.img.map(createMorePictures)}
      </div>
    </div>
  );
}
