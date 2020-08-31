import React from "react";
import { X } from "react-feather";

import Product2 from "../../../assets/images/product-122.jpg";

const WishListCard = () => {
  return (
    <>
      <div className="col-6 col-md-4">
        <div className="card mb-7">
          <div className="card-img">
            <button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right">
              <X size={16} />
            </button>

            <button
              className="btn btn-xs btn-block btn-dark card-btn"
              data-toggle="modal"
              data-target="#modalProduct"
            >
              <i className="fe fe-eye mr-2 mb-1"></i> Quick View
            </button>

            <img className="card-img-top" src={Product2} alt="..." />
          </div>

          <div className="card-body font-weight-bold text-center">
            <a className="text-body" href="product.html">
              Cotton floral print Dress
            </a>{" "}
            <br />
            <span className="text-muted">$40.00</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishListCard;
