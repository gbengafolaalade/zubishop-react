import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Routes from "../common/accounts/routes";

const Accounts = (props) => {
  return (
    <>
      <Router>
        <section className="pt-7 pb-12">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h3 className="mb-10">Welcome! Username</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-3">
                <nav className="mb-10 mb-md-0">
                  <div className="list-group list-group-sm list-group-strong list-group-flush-x">
                    <NavLink
                      className="list-group-item list-group-item-action dropright-toggle"
                      to="/accounts/orders"
                    >
                      Orders
                    </NavLink>
                    <NavLink
                      className="list-group-item list-group-item-action dropright-toggle"
                      to="/accounts/wishlist"
                    >
                      Wishlist
                    </NavLink>
                    <NavLink
                      className="list-group-item list-group-item-action dropright-toggle"
                      to="/accounts/personal-info"
                    >
                      Personal Info
                    </NavLink>
                    <NavLink
                      className="list-group-item list-group-item-action dropright-toggle"
                      to="/accounts/address"
                    >
                      Addresses
                    </NavLink>

                    <NavLink
                      className="list-group-item list-group-item-action dropright-toggle"
                      to="#!"
                    >
                      Logout
                    </NavLink>
                  </div>
                </nav>
              </div>

              <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
                <Switch>
                  {Routes.map((route, index) => {
                    return (
                      <Route
                        key={index}
                        exact={route.exact}
                        path={route.path}
                        children={<route.main {...props} />}
                        {...props}
                      />
                    );
                  })}
                </Switch>
              </div>
            </div>
          </div>
        </section>
      </Router>
    </>
  );
};

export default Accounts;
