import React, { useEffect } from "react";
import { X } from "react-feather";

import product10 from "../../../assets/images/product-10.jpg";
import product6 from "../../../assets/images/product-7.jpg";

const CartModal = ({ show, closeCart }) => {
  useEffect(() => {
    const modalShow = show ? "show" : "hide";
    window.$(".modal").modal(modalShow);
    window.$(".modal").on("hide.bs.modal", closeCart);
  }, [show, closeCart]);

  return (
    <>
      <div
        className="modal fixed-right fade"
        id="modalShoppingCart"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-vertical" role="document">
          <div className="modal-content">
            <button
              onClick={closeCart}
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <X aria-hidden="true" />
            </button>

            <div className="modal-header line-height-fixed font-size-lg">
              <strong className="mx-auto">Your Cart (2)</strong>
            </div>

            <ul className="list-group list-group-lg list-group-flush">
              <li className="list-group-item">
                <div className="row align-items-center">
                  <div className="col-4">
                    <a href="./product.html">
                      <img className="img-fluid" src={product6} alt="..." />
                    </a>
                  </div>
                  <div className="col-8">
                    <p className="font-size-sm font-weight-bold mb-6">
                      <a className="text-body" href="./product.html">
                        Cotton floral print Dress
                      </a>{" "}
                      <br />
                      <span className="text-muted">$40.00</span>
                    </p>

                    <div className="d-flex align-items-center">
                      <select className="custom-select custom-select-xxs w-auto">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                      </select>

                      <a
                        className="font-size-xs text-gray-400 ml-auto"
                        href="#!"
                      >
                        <i className="fe fe-x"></i> Remove
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row align-items-center">
                  <div className="col-4">
                    <a href="./product.html">
                      <img className="img-fluid" src={product10} alt="..." />
                    </a>
                  </div>
                  <div className="col-8">
                    <p className="font-size-sm font-weight-bold mb-6">
                      <a className="text-body" href="./product.html">
                        Suede cross body Bag
                      </a>{" "}
                      <br />
                      <span className="text-muted">$49.00</span>
                    </p>

                    <div className="d-flex align-items-center">
                      <select className="custom-select custom-select-xxs w-auto">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                      </select>

                      <a
                        className="font-size-xs text-gray-400 ml-auto"
                        href="#!"
                      >
                        <i className="fe fe-x"></i> Remove
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <div className="modal-footer line-height-fixed font-size-sm bg-light mt-auto">
              <strong>Subtotal</strong>{" "}
              <strong className="ml-auto">$89.00</strong>
            </div>

            <div className="modal-body">
              <a className="btn btn-block btn-dark" href="./checkout.html">
                Continue to Checkout
              </a>
              <a
                className="btn btn-block btn-outline-dark"
                href="./shopping-cart.html"
              >
                View Cart
              </a>
            </div>
          </div>

          <div className="modal-content d-none">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <X aria-hidden="true" />
            </button>

            <div className="modal-header line-height-fixed font-size-lg">
              <strong className="mx-auto">Your Cart (0)</strong>
            </div>

            <div className="modal-body flex-grow-0 my-auto">
              <h6 className="mb-7 text-center">
                Your cart is empty{" "}
                <span role="img" arial-label="emoji">
                  {/* eslint-disable-next-line */}
                  😞
                </span>
              </h6>

              <a className="btn btn-block btn-outline-dark" href="#!">
                Continue Shopping
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;
