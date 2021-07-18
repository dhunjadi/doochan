import React from 'react'
import itemList from '../itemList'
import Item from '../Components/Item'

export default function Art() {

    function createProduct(props) {
        return (
            <Item
                key={props.id}
                id={props.id}
                img={props.img}
                title={props.title}
                description={props.description}
                price={props.price}
                section={props.section}
            />
        )
    }

    const filtered = itemList.filter((item)=>{
        return (item.section === 'art')
    })

    return (

        <div id='art'>
            <h1>Art</h1>
            <div className="product-container">
                {filtered.map(createProduct)}
            </div>

        </div>
    )
}

