import React from 'react'
import itemList from '../itemList'
import Item from '../Components/Item'


export default function ClothingAndShoes() {

    function createProduct(props) {
        return (
            <Item
                key={props.id}
                id={props.id}
                img={props.img}
                title={props.title}
                description={props.description}
                price={props.price}
            />
        )
    }

    const filtered = itemList.filter((item)=>{
        return (item.section === 'clothes')
    })

    return (
        <div id='clothes'>
            <h1>Clothing and Shoes</h1>
            <div className="product-container">
                {filtered.map(createProduct)}
            </div>

        </div>
    )
}
