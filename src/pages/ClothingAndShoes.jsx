import React from 'react'
import { clothesProducts } from '../productList'
import Product from '../Components/Product'


export default function ClothingAndShoes() {

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
        <div id='clothes'>
            <h1>Clothing and Shoes</h1>
            <div className="product-container">
                {clothesProducts.map(createProduct)}
            </div>

        </div>
    )
}
