import React, { useContext } from 'react'
import { CartContext } from '../Components/context/CartContext'
import CartItem from '../Components/CartItem'



export default function Cart() {
    const { cart } = useContext(CartContext)
    

    const displayCartItems = (props) => {

        const {img, title, description, price, id} = props

        return (
            <CartItem 
            key={id}
            img={img}
            title={title}
            description={description}
            price={price}
            />
        )
    }

    return (
        <div>
            <h1>Cart</h1>
            {cart.map(displayCartItems)}
        </div>
    )
}
