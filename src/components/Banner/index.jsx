import React from 'react'

import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Demo extends React.Component {
  render() {
    const settings = {
      accessibility: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      arrows: true,
      useCSS: true,
    };
    return (
      <Slider {...settings}>
                    <img src={require("./banner1.png")}/>
                    <img src={require("./banner2.jpg")} />
                    <img src={require("./banner3.jpg")} />
      </Slider>
    );
  }
}

export default Demo;