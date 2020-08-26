import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "../components/pages/Home";
import ShopPage from "../components/pages/Shop";
import Product from "../components/pages/Product";

const AppNavigator = (props) => {
  const [showCart, setCart] = useState(false);
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <HomePage
                showCart={showCart}
                setCart={(e) => {
                  e.preventDefault();
                  return setCart(true);
                }}
                closeCart={() => setCart(false)}
              />
            )}
          />
          <Route
            path="/shop"
            component={() => (
              <ShopPage
                showCart={showCart}
                setCart={(e) => {
                  e.preventDefault();
                  return setCart(true);
                }}
                closeCart={() => setCart(false)}
              />
            )}
          />
          <Route
            exact
            path="/product/:id"
            component={() => <Product {...props} />}
          />
        </Switch>
      </Router>
    </>
  );
};

export default AppNavigator;
