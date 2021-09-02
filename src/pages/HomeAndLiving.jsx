import React, { useContext } from "react";
import { DataContext } from "../Components/context/DataContext";
import Item from "../Components/Item";
import { v4 as uuidv4 } from 'uuid';

export default function HomeAndLiving() {
  const { fetched } = useContext(DataContext)
  const filtered = fetched.filter((item) => {
    return item.section === "HomeAndLiving";
  });

  const createItem = (item) => {
    return <Item key={uuidv4()} item={item} />;
  };

  return (
    <div id="home">
      <div className="item-container">{filtered.map(createItem)}</div>
    </div>
  );
}
