import React from "react";

const ReviewForm = () => {
  return (
    <>
      <div className="collapse" id="reviewForm">
        <hr className="my-8" />

        <form>
          <div className="row">
            <div className="col-12 mb-6 text-center">
              <p className="mb-1 font-size-xs">Score:</p>

              <div className="rating-form">
                <input
                  className="rating-input"
                  type="range"
                  min="1"
                  max="5"
                  value="5"
                />

                <div className="rating h5 text-dark" data-value="5">
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
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label className="sr-only" for="reviewName">
                  Your Name:
                </label>
                <input
                  className="form-control form-control-sm"
                  id="reviewName"
                  type="text"
                  placeholder="Your Name *"
                  required
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label className="sr-only" for="reviewEmail">
                  Your Email:
                </label>
                <input
                  className="form-control form-control-sm"
                  id="reviewEmail"
                  type="email"
                  placeholder="Your Email *"
                  required
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <label className="sr-only" for="reviewTitle">
                  Review Title:
                </label>
                <input
                  className="form-control form-control-sm"
                  id="reviewTitle"
                  type="text"
                  placeholder="Review Title *"
                  required
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <label className="sr-only" for="reviewText">
                  Review:
                </label>
                <textarea
                  className="form-control form-control-sm"
                  id="reviewText"
                  rows="5"
                  placeholder="Review *"
                  required
                ></textarea>
              </div>
            </div>
            <div className="col-12 text-center">
              <button className="btn btn-outline-dark" type="submit">
                Post Review
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ReviewForm;
