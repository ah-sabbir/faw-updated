// import * as $ from 'jquery';
import Image from 'next/image';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// if (typeof window !== 'undefined') {
//     window.$ = window.jQuery = require('jquery');
// }

import React from "react";
import SliderCarusal from "react-slick";

// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import dynamic from 'next/dynamic';

// const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
//   ssr: false,
// });


import slider1 from '@/images/slider/slider1.jpg'
import slider2 from '@/images/slider/slider2.jpg'
import slider3 from '@/images/slider/slider3.jpg'

const options = {
  loop: true,
  margin: 10,
  items: 1,
  autoplay: true,
};

const imageSlider = ()=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div>
            <SliderCarusal {...settings}>
                <div className="item">
                    <div className="slider-item-content">
                        <div className="post-thumb mb-4">
                            <a href="blog-single.html">
                                <Image src={slider1} alt="" layout='responsive' height={100} width={100} className="img-fluid"/>
                            </a>
                        </div>

                        <div className="slider-post-content">
                            <span className="cat-name text-color font-sm font-extra text-uppercase letter-spacing">Lifestyle</span>
                            <h3 className="post-title mt-1"><a href="blog-single.html">Tips for Taking a Long-term Trip</a></h3>
                            <span className=" text-muted  text-capitalize">January 2, 2019</span>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="slider-item-content">
                        <div className="post-thumb mb-4">
                            <a href="blog-single.html">
                                <Image src={slider2} alt="" layout="responsive"  width={100} height={100}   className="img-fluid"/>
                            </a>
                        </div>
                        <div className="slider-post-content">
                            <span className="cat-name text-color font-sm font-extra text-uppercase letter-spacing">Travel</span>
                            <h3 className="post-title mt-1"><a href="blog-single.html">Trip to California</a></h3>
                            <span className=" text-muted  text-capitalize">September 15, 2019</span>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="slider-item-content">
                        <div className="post-thumb mb-4">
                            <a href="blog-single.html">
                                <Image src={slider3} alt="" layout="responsive"  width={100} height={100}   className="img-fluid"/>
                            </a>
                        </div>
                        <div className="slider-post-content">
                            <span className="cat-name text-color font-sm font-extra text-uppercase letter-spacing">weekends</span>
                            <h3 className="post-title mt-1"><a href="blog-single.html">Our Favorite Weekend Getaways</a></h3>
                            <span className=" text-muted  text-capitalize">June 12, 2019</span>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="slider-item-content">
                        <div className="post-thumb mb-4">
                            <a href="blog-single.html">
                                <Image src={slider2} alt="" layout="responsive"  width={100} height={100}   className="img-fluid"/>
                            </a>
                        </div>

                        <div className="slider-post-content">
                            <span className="cat-name text-color font-sm font-extra text-uppercase letter-spacing">Travel</span>
                            <h3 className="post-title mt-1"><a href="blog-single.html">Trip to California</a></h3>
                            <span className=" text-muted  text-capitalize">September 15, 2019</span>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="slider-item-content">
                        <div className="post-thumb mb-4">
                            <a href="blog-single.html">
                                <Image src={slider3} alt="" layout="responsive"  width={100} height={100}   className="img-fluid"/>
                            </a>
                        </div>

                        <div className="slider-post-content">
                            <span className="cat-name text-color font-sm font-extra text-uppercase letter-spacing">Travel</span>
                            <h3 className="post-title mt-1"><a href="blog-single.html">Trip to California</a></h3>
                            <span className=" text-muted  text-capitalize">September 15, 2019</span>
                        </div>
                    </div>
                </div>
            </SliderCarusal>
        </div>
      );
}



export default imageSlider;