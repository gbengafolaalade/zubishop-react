import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "../components/common/nav.component";
import HomePage from "../components/pages/Home";
import ShopPage from "../components/pages/Shop";
import Product from "../components/pages/Product";
import Accounts from "../components/pages/Accounts";

const AppNavigator = (props) => {
  const [showCart, setCart] = useState(false);
  return (
    <>
      <Router>
        <Nav setCart={setCart} show={showCart} />
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
          <Route path="/product/:id" component={() => <Product {...props} />} />
          <Route
            path="/accounts/orders"
            component={() => <Accounts {...props} />}
          />
        </Switch>
      </Router>
    </>
  );
};

export default AppNavigator;
