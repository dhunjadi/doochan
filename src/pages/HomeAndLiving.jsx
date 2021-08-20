import React from "react";
import Item from "../Components/Item";

export default function HomeAndLiving({ fetchedData }) {
  const createItem = (newItem) => {
    const { id, img, title, description, price, section } = newItem;

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
    );
  };

  const filtered = fetchedData.filter((item) => {
    return item.section === "home";
  });

  return (
    <div id="home">
      <h1>Home and Living</h1>
      <div className="item-container">{filtered.map(createItem)}</div>
    </div>
  );
}
