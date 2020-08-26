import React, { useEffect } from "react";
import Flickity from "flickity";

import bannerImg1 from "../../../assets/images/cover-26.jpg";
import bannerImg2 from "../../../assets/images/cover-28.jpg";
import bannerImg3 from "../../../assets/images/cover-27.jpg";

const Carousel = () => {
  useEffect(() => {
    const slider = document.querySelector(".flickity-slider");
    new Flickity(slider, {
      fade: true,
      prevNextButtons: true,
      wrapAround: true,
      autoPlay: true,
      draggable: true,
      pageDots: false,
    });
  }, []);

  return (
    <>
      <div className="col-12 col-md-8 col-lg-9 d-none d-md-block offset-md-n2 order-2">
        <div className="h-100 flickity-buttons-bottom-left">
          <div className="flickity-slider" style={{ left: 0 }}>
            <div
              className="w-100 h-md-100 bg-cover is-selected"
              style={{
                backgroundImage: `url(${bannerImg1})`,
                position: "absolute",
                opacity: 1,
              }}
            ></div>
            <div
              className="w-100 h-md-100 bg-cover"
              style={{
                backgroundImage: `url(${bannerImg2})`,
                position: "absolute",
                opacity: 1,
              }}
              aria-hidden="true"
            ></div>
            <div
              className="w-100 h-md-100 bg-cover"
              style={{
                backgroundImage: `url(${bannerImg3})`,
                position: "absolute",
                opacity: 1,
              }}
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
