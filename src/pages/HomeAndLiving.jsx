import React from 'react'
import { homeProducts } from '../productList'
import Product from '../Components/Product'

export default function Home() {

    function createProduct(props){
        return(
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
        <div id='home'>
           <h1>Home and Living</h1> 
           <div className="product-container">
               {homeProducts.map(createProduct)}
           </div>
        </div>
    )
}
