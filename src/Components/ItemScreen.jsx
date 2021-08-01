import React, {useState} from 'react'
import itemList from '../itemList'
import { useParams } from 'react-router'

export default function ItemScreen(props) {

    const { id } = useParams();
    const item = itemList[`${id - 1}`]

    const [picture, setPicture] = useState(item.img)

    const handlePictureClick = (e) =>{
        setPicture(e.target.currentSrc)
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
                        <button className='add-to-cart-btn-item'>Add To Cart</button>
                        <button className='fav-btn-item'>Favorite</button>
                    </div>
                </div>
            </div>
            <div className="more-pictures-div">
                <div onClick={handlePictureClick} className="more-pictures"> <img className='more-pictures-pic' src={item.img} alt="" /> </div>
                <div onClick={handlePictureClick} className="more-pictures"> <img className='more-pictures-pic' src={item.img2} alt="" /> </div>
                <div onClick={handlePictureClick} className="more-pictures"> <img className='more-pictures-pic' src={item.img3} alt="" /> </div>
                <div onClick={handlePictureClick} className="more-pictures"> <img className='more-pictures-pic' src={item.img4} alt="" /> </div>
                <div onClick={handlePictureClick} className="more-pictures"> <img className='more-pictures-pic' src={item.img5} alt="" /> </div>
            </div>
        </div>
    )
}
