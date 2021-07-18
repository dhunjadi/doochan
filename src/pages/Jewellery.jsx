import React from 'react'
import itemList from '../itemList'
import Item from '../Components/Item'

export default function Home() {

    function createProduct(props){
        return(
            <Item 
            key={props.id}
            img={props.img}
            id={props.id}
            title={props.title}
            description={props.description}
            price={props.price}
            />
        )
    }

    const filtered = itemList.filter((item)=>{
        return (item.section === 'jewellery')
    })

    return (
        <div id='jewellery'>
           <h1>Home and Living</h1> 
           <div className="product-container">
               {filtered.map(createProduct)}
           </div>
        </div>
    )
}
