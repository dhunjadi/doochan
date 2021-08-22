import React, { useContext, useState } from "react";
import { CartContext } from "../Components/context/CartContext";
import { DataContext } from "../Components/context/DataContext";
import { useHistory } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

export default function ItemScreen(props) {
  const { fetched } = useContext(DataContext);
  const { cart, setCart } = useContext(CartContext);
  const item = fetched.find((x) => x.id === props.match.params.id);
  const history = useHistory()

  const [picture, setPicture] = useState(item.img[0].img);

  console.log(cart);

  if (!item) {
    return <h1>Product does not exist</h1>;
  }

  const handleAddToCart = (item) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((newItem) => item.title === newItem.title);
    if (itemInCart) {
      alert("Item is already in the cart!");
    } else {
      itemInCart= {
        ...item,
        qty: 1
      }
      newCart.push(itemInCart)
    }
    setCart(newCart)
  };

  const handlePictureClick = (e) => {
    setPicture(e.target.currentSrc);
  };

  const createMorePictures = (picture) => {
    return (
      <div key={uuidv4()} className="more-pictures">
        <img
          onClick={handlePictureClick}
          className="more-pictures-pic"
          src={picture.img}
          alt={picture.title}
        />
      </div>
    );
  };

  return (
    <div id="item-screen">
      <p onClick={()=> history.push(`/${item.section}`)}>Back to results</p>
      <div className="item-img-div">
        <div className="item-img">
          <img src={picture} alt="" />
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
            <button className="add-to-cart-btn-item">Remove from cart</button>
          </div>
        </div>
      </div>
      <div className="more-pictures-div">
        {item.img.map(createMorePictures)}
      </div>
    </div>
  );
}
