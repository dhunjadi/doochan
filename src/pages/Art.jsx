import React from 'react'
import itemList from '../itemList'
import Product from '../Components/Product'

export default function Art() {

    function createProduct(props) {
        return (
            <Product
                key={props.id}
                img={props.img}
                title={props.title}
                description={props.description}
                price={props.price}
            />
        )
    }

    return (
        <div id='art'>
            <h1>Art</h1>
            <div className="product-container">
                {itemList.artItems.map(createProduct)}
            </div>

        </div>
    )
}

