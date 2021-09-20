import React, { useContext, useState } from "react";
import { CartContext } from "../Components/context/CartContext";
import { DataContext } from "../Components/context/DataContext";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function ItemScreen(props) {
  const { fetched } = useContext(DataContext);
  const { cart, setCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false)
  const item = fetched.find((element) => element.id === props.match.params.id);
  const history = useHistory();

  const [picture, setPicture] = useState(item.img[0].img);

  if (!item) {
    return <h1>Product does not exist</h1>;
  }

  const handleAddToCart = (item) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((newItem) => item.title === newItem.title);
    if (itemInCart) {
      setShowModal(!showModal)
    } else {
      itemInCart = {
        ...item,
        qty: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
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
    <>
          <h2
        className="back-to-results"
        onClick={() => history.push(`/${item.section}`)}
      >
        Back to results
      </h2>
    <div id="selected-item-screen">

      <div className="selected-item-img-div">
        <img className="selected-item-img" src={picture} alt="" />
        <div className="more-pictures-div">
          {item.img.map(createMorePictures)}
        </div>
      </div>
      <div className="selected-item-details">
          <div className="selected-item-price">
            <p>${Number(item.price)}</p>
          </div>
          <p className="selected-item-title">{item.title}</p>
          <p className="selected-item-description">{item.description}</p>
          <div className="buttons-div">
            <button
              onClick={() => handleAddToCart(item)}
              className="add-to-cart-btn-item"
            >
              Add To Cart
            </button>
          </div>
        </div>
    </div>
    {showModal ? 
    <div className='modal'>
      <h1>Item is already in the cart!</h1>
      <button onClick={()=>setShowModal(!showModal)}>OK</button>
      </div> : null}
    </>
  );
}
