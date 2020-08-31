import React from "react";

// components
import Banner from "../common/home/banner.component";
import Product from "../common/home/product.component";
import CTA from "../common/home/cta.component";
import AdBanner from "../common/home/ad.component";
import Footer from "../common/footer.component";
import CartModal from "../common/modals/cart.component";

const HomePage = ({ closeCart, setCart, showCart }) => {
  return (
    <>
      <CartModal setCart={setCart} show={showCart} closeCart={closeCart} />
      <Banner />
      <Product />
      <AdBanner />
      <CTA />
      <Footer />
    </>
  );
};

export default HomePage;
