import React, {useContext} from 'react'
import { CartContext } from '../Components/context/CartContext'



export default function Cart() {
    const {cart} = useContext(CartContext)
    
    return (
        <div>
            <h1>Cart</h1>
        </div>
    )
}
