import React from "react";

// images
import Product1 from "../../../assets/images/product-7.jpg";
import Product2 from "../../../assets/images/product-122.jpg";
import Product3 from "../../../assets/images/product-124.jpg";

const OrderCard = () => {
  return (
    <>
      <div className="card card-lg mb-5 border">
        <div className="card-body pb-0">
          <div className="card card-sm">
            <div className="card-body bg-light">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h6 className="heading-xxxs text-muted">Order No:</h6>

                  <p className="mb-lg-0 font-size-sm font-weight-bold">
                    673290789
                  </p>
                </div>
                <div className="col-6 col-lg-3">
                  <h6 className="heading-xxxs text-muted">Shipped date:</h6>

                  <p className="mb-lg-0 font-size-sm font-weight-bold">
                    <time dateTime="2019-10-01">01 Oct, 2019</time>
                  </p>
                </div>
                <div className="col-6 col-lg-3">
                  <h6 className="heading-xxxs text-muted">Status:</h6>

                  <p className="mb-0 font-size-sm font-weight-bold">
                    Awating Delivery
                  </p>
                </div>
                <div className="col-6 col-lg-3">
                  <h6 className="heading-xxxs text-muted">Order Amount:</h6>

                  <p className="mb-0 font-size-sm font-weight-bold">$259.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <div className="form-row mb-4 mb-lg-0">
                <div className="col-3">
                  <div
                    className="embed-responsive embed-responsive-1by1 bg-cover"
                    style={{ backgroundImage: `url(${Product1})` }}
                  ></div>
                </div>
                <div className="col-3">
                  <div
                    className="embed-responsive embed-responsive-1by1 bg-cover"
                    style={{ backgroundImage: `url(${Product2})` }}
                  ></div>
                </div>
                <div className="col-3">
                  <div
                    className="embed-responsive embed-responsive-1by1 bg-cover"
                    style={{ backgroundImage: `url(${Product3})` }}
                  ></div>
                </div>
                <div className="col-3">
                  <div className="embed-responsive embed-responsive-1by1 bg-light">
                    <a
                      className="embed-responsive-item embed-responsive-item-text text-reset"
                      href="#!"
                    >
                      <div className="font-size-xxs font-weight-bold">
                        +2 <br /> more
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="form-row">
                <div className="col-6">
                  <a
                    className="btn btn-sm btn-block btn-outline-dark"
                    href="account-order.html"
                  >
                    Order Details
                  </a>
                </div>
                <div className="col-6">
                  <a
                    className="btn btn-sm btn-block btn-outline-dark"
                    href="#!"
                  >
                    Track order
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

export default OrderCard;
