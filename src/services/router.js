import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Connect } from "../services/api.core";
import { AppContext } from "../services/appstate.service";

import Nav from "../components/common/nav.component";
import HomePage from "../components/pages/Home";
import ShopPage from "../components/pages/Shop";
import Product from "../components/pages/Product";
import Accounts from "../components/pages/Accounts";
import LoginModal from "../components/common/modals/login.component";
import RegisterModal from "../components/common/modals/signup.component";
import AdminLogin from "../components/admin/signin.component";
import AdminDashboard from "../components/admin/dashboard.component";

const id = localStorage.getItem("user");
const oldToken = localStorage.getItem("token");

const AppNavigator = (props) => {
  const [showCart, setCart] = useState(false);
  const [showLogin, setLogin] = useState(false);
  const [showSignup, setSignup] = useState(false);
  const [hideNav, setNav] = useState(false);

  const { setUser } = useContext(AppContext);

  useEffect(() => {
    console.log(window.location.href.split("/")[4]);
    if (window.location.href.split("/")[4] === "admin") {
      setNav(true);
    }
  }, [hideNav]);

  useEffect(() => {
    const loginById = async () => {
      const res = await Connect(
        "api/v1/auth/me/login",
        "POST",
        { id },
        oldToken
      );
      console.log(res);
      if (res.success === true) {
        const { name, email, _id, token } = res.data;
        localStorage.setItem("token", token);
        const userData = {
          name,
          email,
          id: _id,
          login: true,
        };
        setUser(userData);
      } else {
        console.log(res);
      }
    };
    if (oldToken) {
      loginById();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Router>
        {hideNav ? null : (
          <Nav
            setCart={setCart}
            show={showCart}
            setLogin={setLogin}
            {...props}
          />
        )}
        <LoginModal
          show={showLogin}
          closeLogin={() => setLogin(false)}
          setSignup={setSignup}
          {...props}
        />
        <RegisterModal
          closeSignup={() => setSignup(false)}
          show={showSignup}
          setLogin={setLogin}
        />
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
            exact
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
          <Route path="/accounts/orders" component={Accounts} />
          <Route exact path="/shop/admin" component={AdminLogin} />
          <Route
            exact
            path="/shop/admin/dashboard"
            component={AdminDashboard}
          />
        </Switch>
      </Router>
    </>
  );
};

export default AppNavigator;
