import React from "react";
import SizeComponent from "./size.component";

const ProductDetails = () => {
  return (
    <>
      <div className="col-12 col-md-6 pl-lg-10">
        <div className="row mb-1">
          <div className="col">
            <a className="text-muted" href="shop.html">
              Sneakers
            </a>
          </div>
          <div className="col-auto">
            <div className="rating font-size-xs text-dark" data-value="4">
              <div className="rating-item">
                <i className="fas fa-star"></i>
              </div>
              <div className="rating-item">
                <i className="fas fa-star"></i>
              </div>
              <div className="rating-item">
                <i className="fas fa-star"></i>
              </div>
              <div className="rating-item">
                <i className="fas fa-star"></i>
              </div>
              <div className="rating-item">
                <i className="fas fa-star"></i>
              </div>
            </div>

            <a className="font-size-sm text-reset ml-2" href="#reviews">
              Reviews (6)
            </a>
          </div>
        </div>
        <h3 className="mb-2">Leather Sneakers</h3>
        <div className="mb-7">
          <span className="font-size-lg font-weight-bold text-gray-350 text-decoration-line-through">
            $115.00
          </span>
          <span className="ml-1 font-size-h5 font-weight-bolder text-primary">
            $85.00
          </span>
          <span className="font-size-sm ml-1">(In Stock)</span>
        </div>
        <form>
          <div className="form-group">
            <p className="mb-5">
              Color: <strong id="colorCaption">White</strong>
            </p>
            <div className="mb-8 ml-n1">
              <div className="custom-control custom-control-color">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="customColor1"
                  name="imgRadio"
                  data-toggle="form-caption"
                  data-target="#colorCaption"
                  value="White"
                  checked
                />
                <label
                  className="custom-control-label"
                  for="customColor1"
                  style={{ color: "white" }}
                >
                  <span className="text-gray-450">White</span>
                </label>
              </div>

              <div className="custom-control custom-control-color">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="customColor2"
                  name="imgRadio"
                  data-toggle="form-caption"
                  data-target="#colorCaption"
                  value="Black"
                />
                <label
                  className="custom-control-label"
                  for="customColor2"
                  style={{ color: "black" }}
                >
                  <span className="text-gray-450">Black</span>
                </label>
              </div>
            </div>
          </div>

          <SizeComponent />

          <div className="form-row mb-7">
            <div className="col-12 col-lg-auto">
              <select className="custom-select mb-2">
                <option value="1" selected>
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div className="col-12 col-lg">
              <button type="submit" className="btn btn-block btn-dark mb-2">
                Add to Cart <i className="fe fe-shopping-cart ml-2"></i>
              </button>
            </div>
            <div className="col-12 col-lg-auto">
              <button
                className="btn btn-outline-dark btn-block mb-2"
                data-toggle="button"
              >
                Wishlist <i className="fe fe-heart ml-2"></i>
              </button>
            </div>
          </div>

          <p>
            <span className="text-gray-500">Is your size/color sold out?</span>
            <a
              className="text-reset text-decoration-underline"
              data-toggle="modal"
              href="#modalWaitList"
            >
              Join the Wait List!
            </a>
          </p>

          <p className="mb-0">
            <span className="mr-4">Share:</span>
            <a
              className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350"
              href="#!"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350"
              href="#!"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350"
              href="#!"
            >
              <i className="fab fa-pinterest-p"></i>
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export default ProductDetails;
