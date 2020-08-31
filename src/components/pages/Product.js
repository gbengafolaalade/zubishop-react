import React from "react";
import ProductImage from "../common/product/product-image.component";
import ProductDetails from "../common/product/product-details.component";
import ProductDescription from "../common/product/description.component";
import RelatedProduct from "../common/product/related.component";
import ProductReview from "../common/product/product-review.component";

const Product = (props) => {
  return (
    <>
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <ProductImage />
                <ProductDetails />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductDescription />
      <RelatedProduct />
      <ProductReview />
    </>
  );
};

export default Product;
