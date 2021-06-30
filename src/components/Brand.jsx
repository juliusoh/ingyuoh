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
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <ul>
      <Slider {...settings}>
        <li className="item">
          <a href="https://iwahs.org/" target="_blank" rel="noreferrer"><img src="assets/img/partners/iwahs.png" alt="partners brand" /></a>

        </li>
        <li className="item">
        <a href="https://iwahs.org/" target="_blank" rel="noreferrer"><img src="assets/img/partners/asia.png" alt="partners brand" /></a>

        </li>
        <li className="item">
        <a href="https://iwahs.org/" target="_blank" rel="noreferrer"><img src="assets/img/partners/culture.png" alt="partners brand" /></a>

        </li>


      </Slider>
    </ul>
  );
}
