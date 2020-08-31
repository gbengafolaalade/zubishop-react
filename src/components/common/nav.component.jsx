import React from "react";
import { User, ShoppingBag, Heart } from "react-feather";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

const NavBar = ({ setCart }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container">
          <Link className="navbar-brand" style={{ height: 50 }} to="/">
            <img src={Logo} alt="O'joun Lifestyle" height={65} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Blog
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav flex-row">
              <li className="nav-item ml-lg-n4">
                <Link className="nav-link" to="/accounts/orders">
                  <User size={16} />
                </Link>
              </li>
              <li className="nav-item ml-lg-n4">
                <Link className="nav-link" to="/">
                  <Heart size={16} />
                </Link>
              </li>
              <li className="nav-item ml-lg-n4">
                <Link
                  onClick={setCart}
                  className="nav-link"
                  to="#modalShoppingCart"
                >
                  <span data-cart-items="2">
                    <ShoppingBag size={16} />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
