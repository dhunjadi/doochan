import {createContext, useState, useEffect} from 'react'

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    useEffect(() => {
        const data = localStorage.getItem('my-items') 
        if(data) {
            setCart(JSON.parse(data))
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem('my-items', JSON.stringify(cart))
    })


    return(
        <CartContext.Provider value={{ cart, setCart }}>
        {children}
        </CartContext.Provider>
    )
}