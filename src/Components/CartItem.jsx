import React, {useState} from 'react'

export default function CartItem(props) {

    const {img, title, description, price, id} = props

    const [quantity, setQuantity] = useState(1)

    return (
        <>
            <div key={id} className='cart-item-div'>
                <div className="cart-item-img-div">
                    <img className='cart-item-img' src={img[0].img} alt="" />
                </div>
                <div className="cart-item-details">

                    <div className="cart-item-title">
                        <h3>{title}</h3>
                    </div>

                    <div className="cart-item-description">
                        <p>{description}</p>
                    </div>

                </div>

                <div className="cart-item-price">
                    <span>${price}</span>
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
                    <span>${price * quantity}</span>
                </div>

                <div className="cart-remove-item-btn">
                    <button>Remove</button>
                </div> 
                
            </div>
            <hr />
            </>
    )
}
