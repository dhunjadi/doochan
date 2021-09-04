import React from "react";
import { Link } from "react-router-dom";

export default function Item({ item }) {
  const { id, img, title, description, price } = item;

  return (
    <div className="item-div">
      <Link to={`/item/${id}`}>
        <div className="item-img-div">
          <img className="item-img" src={img[0].img} alt="" />
        </div>
        <div className="item-title">
            <h3>{title}</h3>
        </div>
        <div className="item-description">
          <p>{description}</p>
        </div>
        </Link>
        
          <p className='item-price'>${price}</p>
        
    </div>
  );
}
