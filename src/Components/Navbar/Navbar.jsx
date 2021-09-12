import React, { useState, useContext } from "react";
import menuList from "./MenuList";
import { NavLink, useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  const { cart } = useContext(CartContext);

  const history = useHistory();

  const createList = ({ url, title }) => {
    return (
      <li key={uuidv4()}>
        <NavLink
          exact
          to={url}
          activeClassName="active"
          onClick={() => {
            setClicked(!clicked);
          }}
        >
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
