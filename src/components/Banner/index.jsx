import React from 'react'

import Link from "gatsby-link"

import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './banner.css'

class Demo extends React.Component {
    render() {
        const settings = {
            accessibility: true,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            centerPadding: '50px',
            slidesToScroll: 1,
            autoplay: true,
            arrows: true,
            centerMode: true,
            className: "center",
        };
        return (
            <Slider {...settings} >
                <li className="slick-item"><Link to='/'><img src={require("./banner1.png")} /></Link></li>
                <li className="slick-item"><Link to='/'><img src={require("./banner2.png")} /></Link></li>
                <li className="slick-item"><Link to='/'><img src={require("./banner3.png")} /></Link></li>
                <li className="slick-item"><Link to='/'><img src={require("./banner4.png")} /></Link></li>
                <li className="slick-item"><Link to='/'><img src={require("./banner5.png")} /></Link></li>
            </Slider>
        );
    }
}

export default Demo;