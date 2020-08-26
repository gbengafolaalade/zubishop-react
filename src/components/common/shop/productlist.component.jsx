import React from "react";
import { Eye, ShoppingBag, Heart } from "react-feather";
import { Link } from "react-router-dom";

// assets
import product1 from "../../../assets/images/product-120.jpg";
import product2 from "../../../assets/images/product-5.jpg";
import product3 from "../../../assets/images/product-121.jpg";
import product4 from "../../../assets/images/product-6.jpg";
import product5 from "../../../assets/images/product-122.jpg";
import product6 from "../../../assets/images/product-7.jpg";
import product7 from "../../../assets/images/product-8.jpg";
import product8 from "../../../assets/images/product-9.jpg";
import product9 from "../../../assets/images/product-123.jpg";
import product10 from "../../../assets/images/product-10.jpg";
import product11 from "../../../assets/images/product-124.jpg";
import product12 from "../../../assets/images/product-11.jpg";
import product13 from "../../../assets/images/product-12.jpg";

const List = (props) => (
  <>
    <div className="row">
      <div className="col-6 col-md-3">
        <div className="card mb-7">
          <div className="badge badge-white card-badge card-badge-left text-uppercase">
            New
          </div>

          <div className="card-img">
            <Link className="card-img-hover" to="/product/1">
              <img
                className="card-img-top card-img-back"
                src={product1}
                alt="..."
              />
              <img
                className="card-img-top card-img-front"
                src={product2}
                alt="..."
              />
            </Link>

            <div className="card-actions">
              <span className="card-action">
                <button
                  className="btn btn-xs btn-circle btn-white-primary"
                  data-toggle="modal"
                  data-target="#modalProduct"
                >
                  <Eye size={12} />
                </button>
              </span>
              <span className="card-action">
                <button
                  className="btn btn-xs btn-circle btn-white-primary"
                  data-toggle="button"
                >
                  <ShoppingBag size={12} />
                </button>
              </span>
              <span className="card-action">
                <button
                  className="btn btn-xs btn-circle btn-white-primary"
                  data-toggle="button"
                >
                  <Heart size={12} />
                </button>
              </span>
            </div>
          </div>

          <div className="card-body px-0">
            <div className="font-size-xs">
              <Link className="text-muted" to="shop.html">
                Shoes
              </Link>
            </div>

            <div className="font-weight-bold">
              <Link className="text-body" to="/product/1">
                Leather mid-heel Sandals
              </Link>
            </div>

            <div className="font-weight-bold text-muted">$129.00</div>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="card mb-7">
          <div className="card-img">
            <Link className="card-img-hover" to="/product/1">
              <img
                className="card-img-top card-img-back"
                src={product3}
                alt="..."
              />
              <img
                className="card-img-top card-img-front"
                src={product4}
                alt="..."
              />
            </Link>

            <div className="card-actions">
              <span className="card-action">
                <button
                  className="btn btn-xs btn-circle btn-white-primary"
                  data-toggle="modal"
                  data-target="#modalProduct"
                >
                  <Eye size={12} />
                </button>
              </span>
              <span className="card-action">
                <button
                  className="btn btn-xs btn-circle btn-white-primary"
                  data-toggle="button"
                >
                  <ShoppingBag size={12} />
                </button>
              </span>
              <span className="card-action">
                <button
                  className="btn btn-xs btn-circle btn-white-primary"
                  data-toggle="button"
                >
                  <Heart size={12} />
                </button>
              </span>
            </div>
          </div>

          <div className="card-body px-0">
            <div className="font-size-xs">
              <Link className="text-muted" to="shop.html">
                Dresses
              </Link>
            </div>

            <div className="font-weight-bold">
              <Link className="text-body" to="/product/1">
                Cotton floral print Dress
              </Link>
            </div>

            <div className="font-weight-bold text-muted">$40.00</div>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="card mb-7">
          <div className="badge badge-dark card-badge card-badge-left text-uppercase">
            Sale
          </div>

          <div className="card-img">
            <Link className="card-img-hover" to="/product/1">
              <img
                className="card-img-top card-img-back"
                src={product5}
                alt="..."
              />
              <img
                className="card-img-top card-img-front"
                src={product6}
                alt="..."
              />
            </Link>

            <div className="card-actions">
              <span className="card-action">
                <button
                  className="btn btn-xs btn-circle btn-white-primary"
                  data-toggle="modal"
                  data-target="#modalProduct"
                >
                  <Eye size={12} />
                </button>
              </span>
              <span className="card-action">
                <button
                  className="btn btn-xs btn-circle btn-white-primary"
                  data-toggle="button"
                >
                  <ShoppingBag size={12} />
                </button>
              </span>
              <span className="card-action">
                <button
                  className="btn btn-xs btn-circle btn-white-primary"
                  data-toggle="button"
                >
                  <Heart size={12} />
                </button>
              </span>
            </div>
          </div>

          <div className="card-body px-0">
            <div className="font-size-xs">
              <Link className="text-muted" to="shop.html">
                Shoes
              </Link>
            </div>

            <div className="font-weight-bold">
              <Link className="text-body" to="/product/1">
                Leather Sneakers
              </Link>
            </div>

            <div className="font-weight-bold">
              <span className="font-size-xs text-gray-350 text-decoration-line-through">
                $85.00
              </span>
              <span className="text-primary">$85.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="card mb-7">
          <div className="card-img">
            <Link to="#!">
              <img
                className="card-img-top card-img-front"
                src={product7}
                alt="..."
              />
            </Link>

            <div className="card-actions">
              <span className="card-action">
                <button
                  className="btn btn-xs btn-circle btn-white-primary"
                  data-toggle="modal"
                  data-target="#modalProduct"
                >
                  <Eye size={12} />
                </button>
              </span>
              <span className="card-action">
                <button
                  className="btn btn-xs btn-circle btn-white-primary"
                  data-toggle="button"
                >
                  <ShoppingBag size={12} />
                </button>
              </span>
              <span className="card-action">
                <button
                  className="btn btn-xs btn-circle btn-white-primary"
                  data-toggle="button"
                >
                  <Heart size={12} />
                </button>
              </span>
            </div>
          </div>

          <div className="card-body px-0">
            <div className="font-size-xs">
              <Link className="text-muted" to="shop.html">
                Tops
              </Link>
            </div>

            <div className="font-weight-bold">
              <Link className="text-body" to="/product/1">
                Cropped cotton Top
              </Link>
            </div>

            <div className="font-weight-bold text-muted">$29.00</div>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="card mb-7">
          <div className="card-img">
            <Link to="#!">
              <img
                className="card-img-top card-img-front"
                src={product8}
                alt="..."
              />
            </Link>

            <div className="card-actions">
              <span className="card-action">
                <button
                  className="btn btn-xs btn-circle btn-white-primary"
                  data-toggle="modal"
                  data-target="#modalProduct"
                >
                  <Eye size={12} />
                </button>
              </span>
              <span className="card-action">
                <button
                  className="btn btn-xs btn-circle btn-white-primary"
                  data-toggle="button"
                >
                  <ShoppingBag size={12} />
                </button>
              </span>
              <span className="card-action">
                <button
                  className="btn btn-xs btn-circle btn-white-primary"
                  data-toggle="button"
                >
                  <Heart size={12} />
                </button>
              </span>
            </div>
          </div>

          <div className="card-body px-0">
            <div className="font-size-xs">
              <Link className="text-muted" to="shop.html">
                Dresses
              </Link>
            </div>

            <div className="font-weight-bold">
              <Link className="text-body" to="/product/1">
                Floral print midi Dress
              </Link>
            </div>

            <div className="font-weight-bold text-muted">$50.00</div>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="card mb-7">
          <div className="badge badge-dark card-badge card-badge-left text-uppercase">
            Sale
          </div>
          <div className="card-img">
            <Link className="card-img-hover" to="/product/1">
              <img
                className="card-img-top card-img-back"
                src={product9}
                alt="..."
              />
              <img
                className="card-img-top card-img-front"
                src={product10}
                alt="..."
              />
            </Link>

            <div className="card-actions">
              <span className="card-action">
                <button
                  className="btn btn-xs btn-circle btn-white-primary"
                  data-toggle="modal"
                  data-target="#modalProduct"
                >
                  <Eye size={12} />
                </button>
              </span>
              <span className="card-action">
                <button
                  className="btn btn-xs btn-circle btn-white-primary"
                  data-toggle="button"
                >
                  <ShoppingBag size={12} />
                </button>
              </span>
              <span className="card-action">
                <button
                  className="btn btn-xs btn-circle btn-white-primary"
                  data-toggle="button"
                >
                  <Heart size={12} />
                </button>
              </span>
            </div>
          </div>

          <div className="card-body px-0">
            <div className="font-size-xs">
              <Link className="text-muted" to="shop.html">
                Bags
              </Link>
            </div>

            <div className="font-weight-bold">
              <Link className="text-body" to="/product/1">
                Suede cross body Bag
              </Link>
            </div>

            <div className="font-weight-bold">
              <span className="font-size-xs text-gray-350 text-decoration-line-through">
                $79.00
              </span>
              <span className="text-primary">$49.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="card mb-7">
          <div className="card-img">
            <Link className="card-img-hover" to="/product/1">
              <img
                className="card-img-top card-img-back"
                src={product11}
                alt="..."
              />
              <img
                className="card-img-top card-img-front"
                src={product12}
                alt="..."
              />
            </Link>
            <div className="card-actions">
              <span className="card-action">
                <button
                  className="btn btn-xs btn-circle btn-white-primary"
                  data-toggle="modal"
                  data-target="#modalProduct"
                >
                  <Eye size={12} />
                </button>
              </span>
              <span className="card-action">
                <button
                  className="btn btn-xs btn-circle btn-white-primary"
                  data-toggle="button"
                >
                  <ShoppingBag size={12} />
                </button>
              </span>
              <span className="card-action">
                <button
                  className="btn btn-xs btn-circle btn-white-primary"
                  data-toggle="button"
                >
                  <Heart size={12} />
                </button>
              </span>
            </div>
          </div>

          <div className="card-body px-0">
            <div className="font-size-xs">
              <Link className="text-muted" to="shop.html">
                Skirts
              </Link>
            </div>

            <div className="font-weight-bold">
              <Link className="text-body" to="/product/1">
                Printed A-line Skirt
              </Link>
            </div>

            <div className="font-weight-bold text-muted">$79.00</div>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="card mb-7">
          <div className="badge badge-white card-badge card-badge text-uppercase">
            New
          </div>
          <div className="card-img">
            <Link to="#!">
              <img
                className="card-img-top card-img-front"
                src={product13}
                alt="..."
              />
            </Link>

            <div className="card-actions">
              <span className="card-action">
                <button
                  className="btn btn-xs btn-circle btn-white-primary"
                  data-toggle="modal"
                  data-target="#modalProduct"
                >
                  <Eye size={12} />
                </button>
              </span>
              <span className="card-action">
                <button
                  className="btn btn-xs btn-circle btn-white-primary"
                  data-toggle="button"
                >
                  <ShoppingBag size={12} />
                </button>
              </span>
              <span className="card-action">
                <button
                  className="btn btn-xs btn-circle btn-white-primary"
                  data-toggle="button"
                >
                  <Heart size={12} />
                </button>
              </span>
            </div>
          </div>
          <div className="card-body px-0">
            <div className="font-size-xs">
              <Link className="text-muted" to="shop.html">
                Shoes
              </Link>
            </div>

            <div className="font-weight-bold">
              <Link className="text-body" to="/product/1">
                Heel strappy Sandals
              </Link>
            </div>

            <div className="font-weight-bold text-muted">$90.00</div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default List;
