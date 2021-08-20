import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../styles.css";
import Navbar from "./Navbar/Navbar";
import Art from "../pages/Art";
import ClothingAndShoes from "../pages/ClothingAndShoes";
import Home from "../pages/Home";
import HomeAndLiving from "../pages/HomeAndLiving";
import Jewellery from "../pages/Jewellery";
import Toys from "../pages/Toys";
import Cart from "../pages/Cart";
import ItemScreen from "./ItemScreen";

function App() {
  const [cart, setCart] = useState([]);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/items")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFetchedData(data);
      });
  }, []);


    
  return (
    <div className="App">
      <Router>
        <Navbar cart={cart} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/Art">
            <Art fetchedData={fetchedData} />
          </Route>

          <Route path="/ClothingAndShoes">
            <ClothingAndShoes fetchedData={fetchedData} />
          </Route>

          <Route path="/HomeAndLiving">
            <HomeAndLiving fetchedData={fetchedData} />
          </Route>

          <Route path="/Jewellery">
            <Jewellery fetchedData={fetchedData} />
          </Route>

          <Route path="/Toys">
            <Toys fetchedData={fetchedData} />
          </Route>

          <Route path="/item/:id">
            <ItemScreen
              cart={cart}
              setCart={setCart}
              fetchedData={fetchedData}
              Cart={Cart}
            />
          </Route>

          <Route path="/Cart">
            <Cart cart={cart} setCart={setCart} fetchedData={fetchedData} />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
