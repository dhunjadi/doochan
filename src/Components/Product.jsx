import React from 'react'

export default function Product(props) {
    return (
            <div className='product-div'>
                <div className="product-img-div"> <img className='product-img' src={props.img} alt="" /> </div>
                <div className="product-title"> <h3>{props.title}</h3> </div>
                <div className="product-description"> <p>{props.description}</p> </div>
                <div className="add-to-cart-div">
                    <span>{props.price}</span>
                    <i className="fas fa-shopping-cart"></i>
                </div>

            </div>
    )
}
