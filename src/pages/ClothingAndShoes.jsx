import React from 'react'
import itemList from '../itemList'
import Item from '../Components/Item'


export default function ClothingAndShoes() {

    function createProduct(props) {

        const { id, img, title, description, price, section } = props


        return (
            <Item
                key={id}
                id={id}
                img={img[0].img}
                title={title}
                description={description}
                price={price}
                section={section}
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