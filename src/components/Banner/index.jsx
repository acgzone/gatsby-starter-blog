import React from 'react'

import Link from "gatsby-link"

import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './banner.css'

class Demo extends React.Component {
    componentDidMount() {
        setTimeout(() =>
            // this.slider.slickNext(),
            this.slider.slickPrev(),
            100);
    }
    render() {
        const settings = {
            // accessibility: true,
            dots: true,
            infinite: true,
            // speed: 5000,
            slidesToShow: 1,
            centerPadding: '0px',
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            centerMode: true,
            className: "center",
            variableWidth: true,
            initialSlide: 0,
            beforeChange: function (currentSlide, nextSlide) {
                // console.log('before change', currentSlide, nextSlide);
            },
            afterChange: function (currentSlide) {
                // console.log('after change', currentSlide);
            },
        };
        return (
            <Slider ref={c => this.slider = c} {...settings}>
                <li className="slick-item"><Link to='/liuxue#gaozhong'><img src={require("./banner1.png")} /></Link></li>
                <li className="slick-item"><Link to='/news'><img src={require("./banner2.png")} /></Link></li>
                <li className="slick-item"><Link to='/course#ly'><img src={require("./banner3.png")} /></Link></li>
                <li className="slick-item"><Link to='/course#ryrm'><img src={require("./banner4.png")} /></Link></li>
                <li className="slick-item"><Link to='/aboutDc/about1'><img src={require("./banner5.png")} /></Link></li>
            </Slider>
        );
    }
}

export default Demo;