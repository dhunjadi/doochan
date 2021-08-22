import { createContext, useState, useEffect } from 'react'

export const DataContext = createContext();


export const DataContextProvider = ({ children }) => {

  const [fetched, setFetched] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8000/items')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setFetched(data)
      })
  }, [])

  return (
    fetched ?
      <DataContext.Provider value={{ fetched, setFetched }}>
        {children}
      </DataContext.Provider> : null
  )
}



