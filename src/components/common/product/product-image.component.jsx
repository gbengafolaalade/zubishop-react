import React from "react";

// images
import Product1 from "../../../assets/images/product-7.jpg";
import Product2 from "../../../assets/images/product-122.jpg";
import Product3 from "../../../assets/images/product-124.jpg";

const ProductImage = () => {
  return (
    <>
      <div className="col-12 col-md-6">
        <div class="form-row mb-10 mb-md-0">
          <div class="col-6">
            <a className="card mb-4" href={Product1} data-fancybox>
              <div className="badge badge-primary card-badge text-uppercase">
                Sale
              </div>
              <img src={Product1} alt="..." className="card-img-top" />
            </a>
          </div>
          <div class="col-6">
            <a className="card mb-4" href={Product2} data-fancybox>
              <img src={Product2} alt="..." className="card-img-top" />
            </a>
          </div>
          <div class="col-6">
            <a className="card mb-4" href={Product3} data-fancybox>
              <img src={Product3} alt="..." className="card-img-top" />
            </a>
          </div>
          <div class="col-6">
            <a className="card mb-4" href={Product1} data-fancybox>
              <img src={Product1} alt="..." className="card-img-top" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductImage;
