import React from "react";
import { ArrowRight } from "react-feather";

import Carousel from "./carousel.component";
const Banner = () => (
  <>
    <section>
      <div className="container">
        <div className="row">
          <Carousel />
          <div className="col-12 col-md-6 col-lg-5 py-12 order-1">
            <h1 className="display-4 mb-8">2019 Summer Collection</h1>

            <a className="btn btn-dark" href="shop.html">
              Shop Now <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Banner;
