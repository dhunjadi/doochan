import React, { useContext } from "react";
import { DataContext } from "../Components/context/DataContext";
import Item from "../Components/Item";
import { v4 as uuidv4 } from 'uuid';

export default function Art() {
  const { fetched } = useContext(DataContext)
  const filtered = fetched.filter((item) => {
    return item.section === "Art";
  });

  const createItem = (item) => {
    return <Item key={uuidv4()} item={item} />;
  };

  return (
    <div id="art">
      <div className="item-container">{filtered.map(createItem)}</div>
    </div>
  );
}
