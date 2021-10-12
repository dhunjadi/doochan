import { createContext, useState } from "react";
import itemList from "../../itemList";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [ data ] = useState(itemList);

  return (
    <DataContext.Provider value={{ data }}>
      {children}
    </DataContext.Provider>
  );
};
