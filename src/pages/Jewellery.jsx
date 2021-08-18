import React, {useContext} from 'react'
import { DataContext } from '../Components/context/DataContext'
import Item from '../Components/Item'

export default function Jewellery() {

   const { fetchedData } = useContext(DataContext)

   console.log(fetchedData)

    const createProduct = (props) => {

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

    const filtered = fetchedData.filter((item)=>{
        return (item.section === 'jewellery')
    })

    return (

        <div id='jewellery'>
            <h1>Art</h1>
            <div className="item-container">
                {filtered.map(createProduct)}
            </div>

        </div>
    )
}

