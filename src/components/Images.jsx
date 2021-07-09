import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="about_image">
        <img src="assets/img/slider/ingyu1.jpeg" alt="about"  />
      </div>
      <div className="about_image">
        <img src="assets/img/slider/ingyu-about2.jpeg" alt="about"  />
      </div>
      <div className="about_image">
        <img src="assets/img/slider/ingyu-about3.jpeg" alt="about" />
      </div>
    </Slider>
  );
}
