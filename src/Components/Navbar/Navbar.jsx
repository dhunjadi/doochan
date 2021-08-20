import React, { useState } from "react";
import menuList from "./MenuList";
import { NavLink, useHistory } from "react-router-dom";

export default function Navbar({ cart }) {
  const [clicked, setClicked] = useState(false);

  const history = useHistory();

  const createList = ({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink exact to={url} activeClassName="active">
          {title}
        </NavLink>
      </li>
    );
  };

  return (
    <div id="navbar">
      <div className="logo">
        <h1
          onClick={() => {
            history.push("/");
          }}
        >
          Doochan
        </h1>
      </div>
      <div
        className="burger-menu"
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "menu-list" : "menu-list closed"}>
        {menuList.map(createList)}
      </ul>
      <i
        onClick={() => {
          history.push("/Cart");
        }}
        className="fas fa-shopping-cart"
      >
        ({cart.length})
      </i>
    </div>
  );
}
