import React from 'react'
import itemList from '../itemList'
import { useParams } from 'react-router'

export default function ItemScreen(props) {

    const { id } = useParams();
    const item = itemList[`${id-1}`]


    return (
        <div id='product-screen'>
            <div className='product-img-div'>
                <div className="product-img"> <img src={item.img} alt="" /> </div>
            </div>
            <div className="product-details">
                <p>{item.title}</p>
                <p>{item.description}</p>
                <div className="buttons">
                    <button>Buy</button>
                    <button>Favorite</button>
                </div>
            </div>
        </div>
    )
}
