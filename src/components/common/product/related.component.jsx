import React from "react";
import { Eye, ShoppingBag, Heart } from "react-feather";
import { Link } from "react-router-dom";

import product1 from "../../../assets/images/product-120.jpg";
import product2 from "../../../assets/images/product-5.jpg";
import product3 from "../../../assets/images/product-121.jpg";
import product4 from "../../../assets/images/product-6.jpg";
import product5 from "../../../assets/images/product-122.jpg";
import product6 from "../../../assets/images/product-7.jpg";
import product7 from "../../../assets/images/product-8.jpg";

const RelatedProduct = () => {
  return (
    <>
      <section class="pt-11">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h4 class="mb-10 text-center">You might also like</h4>

              <div class="row">
                <div class="col-6 col-sm-6 col-md-4 col-lg-3">
                  <div class="card mb-7">
                    <div class="badge badge-white card-badge card-badge-left text-uppercase">
                      New
                    </div>

                    <div class="card-img">
                      <Link class="card-img-hover" to="/product/1">
                        <img
                          class="card-img-top card-img-back"
                          src={product1}
                          alt="..."
                        />
                        <img
                          class="card-img-top card-img-front"
                          src={product2}
                          alt="..."
                        />
                      </Link>

                      <div class="card-actions">
                        <span class="card-action">
                          <button
                            class="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="modal"
                            data-target="#modalProduct"
                          >
                            <Eye size={16} />
                          </button>
                        </span>
                        <span class="card-action">
                          <button
                            class="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <ShoppingBag size={16} />
                          </button>
                        </span>
                        <span class="card-action">
                          <button
                            class="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <Heart size={16} />
                          </button>
                        </span>
                      </div>
                    </div>

                    <div class="card-body px-0">
                      <div class="font-size-xs">
                        <Link class="text-muted" to="shop.html">
                          Shoes
                        </Link>
                      </div>

                      <div class="font-weight-bold">
                        <Link class="text-body" to="/product/1">
                          Leather mid-heel Sandals
                        </Link>
                      </div>

                      <div class="font-weight-bold text-muted">$129.00</div>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-sm-6 col-md-4 col-lg-3">
                  <div class="card mb-7">
                    <div class="card-img">
                      <Link class="card-img-hover" to="/product/1">
                        <img
                          class="card-img-top card-img-back"
                          src={product3}
                          alt="..."
                        />
                        <img
                          class="card-img-top card-img-front"
                          src={product4}
                          alt="..."
                        />
                      </Link>

                      <div class="card-actions">
                        <span class="card-action">
                          <button
                            class="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="modal"
                            data-target="#modalProduct"
                          >
                            <Eye size={16} />
                          </button>
                        </span>
                        <span class="card-action">
                          <button
                            class="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <ShoppingBag size={16} />
                          </button>
                        </span>
                        <span class="card-action">
                          <button
                            class="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <Heart size={16} />
                          </button>
                        </span>
                      </div>
                    </div>

                    <div class="card-body px-0">
                      <div class="font-size-xs">
                        <Link class="text-muted" to="shop.html">
                          Dresses
                        </Link>
                      </div>

                      <div class="font-weight-bold">
                        <Link class="text-body" to="/product/1">
                          Cotton floral print Dress
                        </Link>
                      </div>

                      <div class="font-weight-bold text-muted">$40.00</div>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-sm-6 col-md-4 col-lg-3">
                  <div class="card mb-7">
                    <div class="badge badge-dark card-badge card-badge-left text-uppercase">
                      Sale
                    </div>

                    <div class="card-img">
                      <Link class="card-img-hover" to="/product/1">
                        <img
                          class="card-img-top card-img-back"
                          src={product5}
                          alt="..."
                        />
                        <img
                          class="card-img-top card-img-front"
                          src={product6}
                          alt="..."
                        />
                      </Link>

                      <div class="card-actions">
                        <span class="card-action">
                          <button
                            class="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="modal"
                            data-target="#modalProduct"
                          >
                            <Eye size={16} />
                          </button>
                        </span>
                        <span class="card-action">
                          <button
                            class="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <ShoppingBag size={16} />
                          </button>
                        </span>
                        <span class="card-action">
                          <button
                            class="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <Heart size={16} />
                          </button>
                        </span>
                      </div>
                    </div>

                    <div class="card-body px-0">
                      <div class="font-size-xs">
                        <Link class="text-muted" to="shop.html">
                          Shoes
                        </Link>
                      </div>

                      <div class="font-weight-bold">
                        <Link class="text-body" to="/product/1">
                          Leather Sneakers
                        </Link>
                      </div>

                      <div class="font-weight-bold">
                        <span class="font-size-xs text-gray-350 text-decoration-line-through">
                          $85.00
                        </span>
                        <span class="text-primary">$85.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-sm-6 col-md-4 col-lg-3 d-md-none d-lg-block">
                  <div class="card mb-7">
                    <div class="card-img">
                      <Link to="#!">
                        <img
                          class="card-img-top card-img-front"
                          src={product7}
                          alt="..."
                        />
                      </Link>

                      <div class="card-actions">
                        <span class="card-action">
                          <button
                            class="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="modal"
                            data-target="#modalProduct"
                          >
                            <Eye size={16} />
                          </button>
                        </span>
                        <span class="card-action">
                          <button
                            class="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <ShoppingBag size={16} />
                          </button>
                        </span>
                        <span class="card-action">
                          <button
                            class="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <Heart size={16} />
                          </button>
                        </span>
                      </div>
                    </div>

                    <div class="card-body px-0">
                      <div class="font-size-xs">
                        <Link class="text-muted" to="shop.html">
                          Tops
                        </Link>
                      </div>

                      <div class="font-weight-bold">
                        <Link class="text-body" to="/product/1">
                          Cropped cotton Top
                        </Link>
                      </div>

                      <div class="font-weight-bold text-muted">$29.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RelatedProduct;
