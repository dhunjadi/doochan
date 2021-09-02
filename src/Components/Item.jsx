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
            <span>{title}</span>
        </div>
        <div className="item-description">
          <span>{description}</span>
        </div>
        </Link>
        
          <span className='item-price'>${price}</span>
        
    </div>
  );
}
