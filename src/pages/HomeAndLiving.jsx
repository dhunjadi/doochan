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
                img={img}
                title={title}
                description={description}
                price={price}
                section={section}
            />
        )
    }

    const filtered = itemList.filter((item)=>{
        return (item.section === 'home')
    })

    return (
        <div id='home'>
           <h1>Home and Living</h1> 
           <div className="product-container">
               {filtered.map(createProduct)}
           </div>
        </div>
    )
}
