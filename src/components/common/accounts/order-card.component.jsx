import React from "react";

// images
import Product1 from "../../../assets/images/product-7.jpg";
import Product2 from "../../../assets/images/product-122.jpg";
import Product3 from "../../../assets/images/product-124.jpg";

const OrderCard = () => {
  return (
    <>
      <div class="card card-lg mb-5 border">
        <div class="card-body pb-0">
          <div class="card card-sm">
            <div class="card-body bg-light">
              <div class="row">
                <div class="col-6 col-lg-3">
                  <h6 class="heading-xxxs text-muted">Order No:</h6>

                  <p class="mb-lg-0 font-size-sm font-weight-bold">673290789</p>
                </div>
                <div class="col-6 col-lg-3">
                  <h6 class="heading-xxxs text-muted">Shipped date:</h6>

                  <p class="mb-lg-0 font-size-sm font-weight-bold">
                    <time datetime="2019-10-01">01 Oct, 2019</time>
                  </p>
                </div>
                <div class="col-6 col-lg-3">
                  <h6 class="heading-xxxs text-muted">Status:</h6>

                  <p class="mb-0 font-size-sm font-weight-bold">
                    Awating Delivery
                  </p>
                </div>
                <div class="col-6 col-lg-3">
                  <h6 class="heading-xxxs text-muted">Order Amount:</h6>

                  <p class="mb-0 font-size-sm font-weight-bold">$259.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="row align-items-center">
            <div class="col-12 col-lg-6">
              <div class="form-row mb-4 mb-lg-0">
                <div class="col-3">
                  <div
                    class="embed-responsive embed-responsive-1by1 bg-cover"
                    style={{ backgroundImage: `url(${Product1})` }}
                  ></div>
                </div>
                <div class="col-3">
                  <div
                    class="embed-responsive embed-responsive-1by1 bg-cover"
                    style={{ backgroundImage: `url(${Product2})` }}
                  ></div>
                </div>
                <div class="col-3">
                  <div
                    class="embed-responsive embed-responsive-1by1 bg-cover"
                    style={{ backgroundImage: `url(${Product3})` }}
                  ></div>
                </div>
                <div class="col-3">
                  <div class="embed-responsive embed-responsive-1by1 bg-light">
                    <a
                      class="embed-responsive-item embed-responsive-item-text text-reset"
                      href="#!"
                    >
                      <div class="font-size-xxs font-weight-bold">
                        +2 <br /> more
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <div class="form-row">
                <div class="col-6">
                  <a
                    class="btn btn-sm btn-block btn-outline-dark"
                    href="account-order.html"
                  >
                    Order Details
                  </a>
                </div>
                <div class="col-6">
                  <a class="btn btn-sm btn-block btn-outline-dark" href="#!">
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
