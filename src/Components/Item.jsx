import React from 'react'
import { Link } from 'react-router-dom'


export default function Item(props) {  

    const {id, img, title, description, price} = props


    return (
        <div className='item-div'>
            <Link to={`/item/${id}`}>
                <div className="item-img-div"> <img className='item-img' src={img} alt="" /> </div>
                <div className="item-title"> <h3>{title}</h3> </div>
                <div className="item-description"> <p>{description}</p> </div>
                <div className="add-to-cart-div">
                    <span>{price}</span>
                
                </div>
            </Link>
        </div>


    )
}

