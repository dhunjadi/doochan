import React from 'react'
import itemList from '../itemList'
import { useParams } from 'react-router'

export default function ItemScreen(props) {

    const { id } = useParams();
    const item = itemList[`${id - 1}`]


    return (
        <div id='item-screen'>
            <div className='item-img-div'>
                <div className="item-img"> <img src={item.img} alt="" /> </div>
                <div className="item-price">
                    <p>$9.99</p>
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
                <div className="more-pictures"> <img className='more-pictures-pic' src="https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg" alt="" /> </div>
                <div className="more-pictures"> <img className='more-pictures-pic' src="https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg" alt="" /> </div>
                <div className="more-pictures"> <img className='more-pictures-pic' src="https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg" alt="" /> </div>
                <div className="more-pictures"> <img className='more-pictures-pic' src="https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg" alt="" /> </div>
                <div className="more-pictures"> <img className='more-pictures-pic' src="https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg" alt="" /> </div>

            </div>
        </div>
    )
}
