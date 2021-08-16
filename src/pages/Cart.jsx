import React, { useState, useContext } from 'react'
import { CartContext } from '../Components/context/CartContext'



export default function Cart() {
    const { cart } = useContext(CartContext)
    const [quantity, setQuantity] = useState(1)

    const displayCartItems = (cartItem) => {
        return (
            <>
            <div key={cartItem.id} className='cart-item-div'>
                <div className="cart-item-img-div">
                    <img className='cart-item-img' src={cartItem.img[0].img} alt="" />
                </div>
                <div className="cart-item-details">

                    <div className="cart-item-title">
                        <h3>{cartItem.title}</h3>
                    </div>

                    <div className="cart-item-description">
                        <p>{cartItem.description}</p>
                    </div>

                </div>

                <div className="cart-item-price">
                    <span>${cartItem.price}</span>
                </div>

                <div className="cart-number-input-div">
                    <input className='cart-number-input'
                        type="number"
                        min='1'
                        placeholder={quantity}
                        onChange={ (e) => { setQuantity(e.target.value) }}
                    />
                </div>

                <div className="cart-item-price-total">
                    <span>${cartItem.price * quantity}</span>
                </div>

                <div className="cart-remove-item-btn">
                    <button>Remove</button>
                </div> 
                
            </div>
            <hr />
            </>
        )
    }

    return (
        <div>
            <h1>Cart</h1>
            {cart.map(displayCartItems)}
        </div>
    )
}
