import React from "react";
import ReviewForm from "./review-form.component";
import ReviewCard from "./review-card.component";

const ProductReview = () => {
  return (
    <>
      <section className="pt-9 pb-11" id="reviews">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4 className="mb-10 text-center">Reviews</h4>

              <div className="row align-items-center">
                <div className="col-12 col-md text-md-center">
                  <div
                    className="rating text-dark h6 mb-4 mb-md-0"
                    data-value="4"
                  >
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

                  <strong className="font-size-sm ml-2">Reviews (3)</strong>
                </div>
                <div className="col-12 col-md-auto">
                  <a
                    className="btn btn-sm btn-dark"
                    data-toggle="collapse"
                    href="#reviewForm"
                  >
                    Write Review
                  </a>
                </div>
              </div>
              <ReviewForm />
              <div className="mt-8">
                <ReviewCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductReview;
