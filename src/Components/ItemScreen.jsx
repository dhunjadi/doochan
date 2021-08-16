import React, {useState, useContext} from 'react'
import { CartContext } from './context/CartContext';
import itemList from '../itemList'
import { useParams } from 'react-router'

export default function ItemScreen(props) {

    const { id } = useParams();
    const item = itemList[`${id - 1}`]

    const [picture, setPicture] = useState(item.img[0].img)

    const { cart, setCart } = useContext(CartContext)

    const handlePictureClick = (e) =>{
        setPicture(e.target.currentSrc)
    }

    const createMorePictures = (item) => {
        return(
            <div key={item.img} className="more-pictures"> <img onClick={handlePictureClick} className='more-pictures-pic' src={item.img} alt="" /> </div>
        )
    }

    const handleAddToCart = (item) =>{
        setCart([...cart, item])
    }

   

    return (
        <div id='item-screen'>
            <div className='item-img-div'>
                <div className="item-img"> <img src={picture} alt="" /> </div>
                <div className="item-price">
                    <p>{item.price}</p>
                    
                </div>
                <div className="item-details">
                    <p className='item-title'>{item.title}</p>
                    <p className='item-description'>{item.description}</p>
                    <div className="buttons">
                        <button onClick={ () => handleAddToCart(item)} className='add-to-cart-btn-item'>Add To Cart</button>
                        <button className='fav-btn-item'>Favorite</button>
                    </div>
                </div>
            </div>
            <div className="more-pictures-div">

            {itemList[`${id - 1}`].img.map(createMorePictures)}
            
            </div>
        </div>
    )
}
