import React from "react";

// components
import Banner from "../common/shop/shopbanner.component";
import Nav from "../common/nav.component";
import Footer from "../common/footer.component";
import List from "../common/shop/productlist.component";
import Search from "../common/shop/productsearch.component";
import Pagination from "../common/shop/pagination.component";
import CartModal from "../common/modals/cart.component";

const Shop = ({ setCart, closeCart, showCart }) => {
  return (
    <>
      <Nav setCart={setCart} />
      <CartModal setCart={setCart} show={showCart} closeCart={closeCart} />
      <section className="py-11">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-12">
              <Banner />
              <div className="align-items-center mb-7">
                <Search />
              </div>
              <div className="row">
                <List />
              </div>
              <Pagination />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Shop;
