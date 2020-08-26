import React, { useEffect } from "react";
import { ArrowRight } from "react-feather";
import Flickity from "flickity";

// assets
import product from "../../../assets/images/cover-24.jpg";
import product1 from "../../../assets/images/cover-16.jpg";
import product2 from "../../../assets/images/cover-29.jpg";
import product3 from "../../../assets/images/cover-30.jpg";

const ShopBanner = () => {
  useEffect(() => {
    const slider = document.querySelector(".flickity-page-dots-inner");
    new Flickity(slider, {
      fade: true,
      prevNextButtons: false,
      wrapAround: true,
      autoPlay: true,
      draggable: true,
      pageDots: false,
    });
  }, []);
  return (
    <>
      <div className="flickity-page-dots-inner mb-9" tabIndex={0}>
        <div
          className="w-100 is-selected"
          style={{ position: "absolute", left: 300 }}
        >
          <div
            className="card bg-h-100 bg-left"
            style={{ backgroundImage: `url(${product})` }}
          >
            <div className="row" style={{ minHeight: 400 }}>
              <div className="col-12 col-md-10 col-lg-8 col-xl-6 align-self-center">
                <div className="card-body px-md-10 py-11">
                  <h4>2019 Summer Collection</h4>

                  <a className="btn btn-link px-0 text-body" href="shop.html">
                    View Collection{" "}
                    <span className="ml-2">
                      <ArrowRight />
                    </span>
                  </a>
                </div>
              </div>
              <div
                className="col-12 col-md-2 col-lg-4 col-xl-6 d-none d-md-block bg-cover"
                style={{ backgroundImage: `url(${product1})` }}
              ></div>
            </div>
          </div>
        </div>
        <div
          className="w-100"
          aria-hidden="true"
          style={{ position: "absolute", left: "100%" }}
        >
          <div
            className="card bg-cover"
            style={{ backgroundImage: `url(${product2})` }}
          >
            <div className="row align-items-center" style={{ minHeight: 400 }}>
              <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                <div className="card-body px-md-10 py-11">
                  <h4 className="mb-5">Get -50% from Summer Collection</h4>

                  <p className="mb-7">
                    Appear, dry there darkness they're seas. <br />
                    <strong className="text-primary">Use code 4GF5SD</strong>
                  </p>

                  <a className="btn btn-outline-dark" href="shop.html">
                    Shop Now{" "}
                    <span className="ml-2">
                      <ArrowRight />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-100"
          aria-hidden="true"
          style={{ position: "absolute", left: "200%" }}
        >
          <div
            className="card bg-cover"
            style={{ backgroundImage: `url(${product3})` }}
          >
            <div className="row align-items-center" style={{ minHeight: 400 }}>
              <div className="col-12">
                <div className="card-body px-md-10 py-11 text-center text-white">
                  <p className="text-uppercase">Enjoy an extra</p>

                  <h1 className="display-4 text-uppercase">50% off</h1>

                  <a className="link-underline text-reset" href="shop.html">
                    Shop Collection
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopBanner;
