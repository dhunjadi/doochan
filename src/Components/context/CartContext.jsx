import {createContext, useState, useEffect} from 'react'

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [quantity, setQuantity] = useState(1);

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
        <CartContext.Provider value={{ cart, setCart, total, setTotal, quantity, setQuantity }}>
        {children}
        </CartContext.Provider>
    )
}