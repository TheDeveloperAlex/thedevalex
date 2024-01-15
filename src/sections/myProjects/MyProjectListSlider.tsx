import React, { ReactNode } from "react";
import Slider from "react-slick";

import "./MyProjectListSlider.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  appendDots: (dots: ReactNode[]) => {
    return (
      <div
        style={{
          marginTop: "20px",
          position: "relative",
          bottom: "0px",
        }}
      >
        <ul className="myProjects-section-list-slider-dots-list">{dots}</ul>
      </div>
    );
  },
  customPaging: (i: number) => (
    <div className="myProjects-section-list-slider-dots-list-item">
      <span hidden>{i + 1}</span>
    </div>
  ),
};

interface MyProjectListSliderProps {
  children: ReactNode;
}

export default function MyProjectListSlider({
  children,
}: MyProjectListSliderProps) {
  return <Slider {...settings}>{children}</Slider>;
}
