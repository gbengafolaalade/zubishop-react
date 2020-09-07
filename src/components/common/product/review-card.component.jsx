import React from "react";
import { ThumbsUp, ThumbsDown } from "react-feather";
import { Link } from "react-router-dom";

const ReviewCard = () => {
  return (
    <>
      <div className="review">
        <div className="review-body">
          <div className="row">
            <div className="col-12 col-md-auto">
              <div className="avatar avatar-xxl mb-6 mb-md-0">
                <span className="avatar-title rounded-circle">
                  <i className="fas fa-user"></i>
                </span>
              </div>
            </div>
            <div className="col-12 col-md">
              <div className="row mb-6">
                <div className="col-12">
                  <div className="rating font-size-sm text-dark" data-value="5">
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
                <div className="col-12">
                  <span className="font-size-xs text-muted">
                    Logan Edwards,{" "}
                    <time datetime="2019-07-25">25 Jul 2019</time>
                  </span>
                </div>
              </div>

              <p className="mb-2 font-size-lg font-weight-bold">So cute!</p>

              <p className="text-gray-500">
                Justo ut diam erat hendrerit. Morbi porttitor, per eu. Sodales
                curabitur diam sociis. Taciti lobortis nascetur. Ante laoreet
                odio hendrerit. Dictumst curabitur nascetur lectus potenti dis
                sollicitudin habitant quis vestibulum.
              </p>

              <div className="row align-items-center">
                <div className="col-auto d-none d-lg-block">
                  <p className="mb-0 font-size-sm">Was this review helpful?</p>
                </div>
                <div className="col-auto mr-auto">
                  <div className="rate">
                    <Link
                      className="rate-item"
                      data-toggle="vote"
                      data-count="3"
                      to="#"
                      role="button"
                    >
                      <ThumbsUp size={16} className="mx-2" />
                    </Link>
                    <Link
                      className="rate-item"
                      data-toggle="vote"
                      data-count="0"
                      to="#"
                      role="button"
                    >
                      <ThumbsDown size={16} className="mx-2" />
                    </Link>
                  </div>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <p className="mb-0 font-size-sm">Comments (0)</p>
                </div>
                <div className="col-auto">
                  <Link className="btn btn-xs btn-outline-border" to="#!">
                    Comment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
