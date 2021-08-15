import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../styles.css'
import Navbar from "./Navbar/Navbar";
import Art from '../pages/Art'
import ClothingAndShoes from '../pages/ClothingAndShoes'
import Home from '../pages/Home'
import HomeAndLiving from '../pages/HomeAndLiving'
import Jewellery from '../pages/Jewellery'
import Toys from '../pages/Toys'
import Cart from "../pages/Cart";
import ItemScreen from "./ItemScreen";
import { CartContextProvider } from "./context/CartContext";



function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/Art' component={Art} />
            <Route path='/ClothingAndShoes' component={ClothingAndShoes} />
            <Route path='/HomeAndLiving' component={HomeAndLiving} />
            <Route path='/Jewellery' component={Jewellery} />
            <Route path='/Toys' component={Toys} />
            <Route path='/item/:id' component={ItemScreen} />
            <Route path='/Cart' component={Cart} />
          </Switch>
        </Router>
      </div>
    </CartContextProvider>
  );
}

export default App;
