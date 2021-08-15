import React, {useContext} from 'react'
import { CartContext } from '../Components/context/CartContext'



export default function Cart() {
    const {cart} = useContext(CartContext)
    
    return (
        <div>
            <h1>Cart</h1>
            {cart.map((cartItem) => (
                  <div className='item-div'>
                      <div className="item-img-div"> <img className='product-img' src={cartItem.img[0].img} alt="" /> </div>
                      <div onClick={console.log(cartItem)} className="item-title"> <h3>{cartItem.title}</h3> </div>
                      <div className="item-description"> <p>{cartItem.description}</p> </div>
                      <div className="add-to-cart-div">
                          <span>{cartItem.price}</span>
                      </div>
              </div>
            ))}
        </div>
    )
}
