import React from 'react'
import { Link } from 'react-router-dom'


export default function Item({item}) {  

    return (
        <div className='item-div'>
            <Link to={`/item/${item.id}`}>
                <div className="item-img-div"> <img className='item-img' src={item.img[0].img} alt="" /> </div>
                <div className="item-title"> <h3>{item.title}</h3> </div>
                <div className="item-description"> <p>{item.description}</p> </div>
                <div className="add-to-cart-div">
                    <span>{item.price}</span>
                </div>
            </Link>
        </div>


    )
}

