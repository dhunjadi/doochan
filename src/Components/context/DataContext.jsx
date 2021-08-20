import {createContext, useState, useEffect} from 'react'

export const DataContext = createContext();


export const DataContextProvider = ({children}) => {

    const [fetchedData, setFetchedData] = useState(null)

    useEffect( () => {
        fetch('http://localhost:8000/items')
        .then(res => {
          return res.json()
        })
        .then(data => {
          setFetchedData(data)
        })
      }, [])


 

    return(
        fetchedData ?
        <DataContext.Provider value={{ fetchedData, setFetchedData }}>
        {children}
        </DataContext.Provider> : null
    )
}



