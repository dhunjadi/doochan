import React from 'react'
import itemList from '../itemList'
import Item from '../Components/Item'

export default function Home() {

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
        return (item.section === 'jewellery')
    })

    return (
        <div id='jewellery'>
           <h1>Jewellery</h1> 
           <div className="product-container">
               {filtered.map(createProduct)}
           </div>
        </div>
    )
}
