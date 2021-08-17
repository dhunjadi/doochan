import React, {useContext} from 'react'
import { DataContext } from '../Components/context/DataContext'
import Item from '../Components/Item'

export default function HomeAndLiving() {

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
        return (item.section === 'home')
    })

    return (

        <div id='home'>
            <h1>Art</h1>
            <div className="product-container">
                {filtered.map(createProduct)}
            </div>

        </div>
    )
}

