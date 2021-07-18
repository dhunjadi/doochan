import React from 'react'
import { Link } from 'react-router-dom'

export default function Item(props) {  

    return (
        <div className='item-div' onClick={()=>{console.log('fdsf')}}>
            <Link to={`/item/${props.id}`}>
                <div className="item-img-div"> <img className='product-img' src={props.img} alt="" /> </div>
                <div className="item-title"> <h3>{props.title}</h3> </div>
                <div className="item-description"> <p>{props.description}</p> </div>
                <div className="add-to-cart-div">
                    <span>{props.price}</span>
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </Link>
        </div>


    )
}
