'use client'

// import * as $ from 'jquery';
import Image from 'next/image';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './sliderSection.module.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



import slider1 from '@/images/slider/slider1.jpg'
import slider2 from '@/images/slider/slider2.jpg'
import slider3 from '@/images/slider/slider3.jpg'
import Link from 'next/link';

const options = {
  loop: true,
  margin: 10,
  items: 1,
  autoplay: true,
};


const data = [
    {
        image: slider1,
        category: "Lifestyle",
        title: "Tips for Taking a Long-term Trip",
        date: "January 2, 2019",
        URL: "/1"
    },
    {
        image: slider1,
        category: "Lifestyle",
        title: "Tips for Taking a Long-term Trip",
        date: "January 2, 2019",
        URL: "/1"
    },
    {
        image: slider1,
        category: "Lifestyle",
        title: "Tips for Taking a Long-term Trip",
        date: "January 2, 2019",
        URL: "/1"
    },
]



const ImageSlider = ()=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
            {
                data.map((d,i)=>{
                    return (
                        <SwiperSlide key={i} className="item">
                        <div className="slider-item-content">
                            <div className="post-thumb mb-4">
                                    <Image src={d.image} alt="" layout='responsive' height={100} width={100} className="d-block"/>
                            </div>
    
                            <div className="slider-post-content">
                                <span className="cat-name text-color font-sm font-extra text-uppercase letter-spacing">{d.category}</span>
                                <h3 className="post-title mt-1"><Link href={d.URL}>{d.title}</Link></h3>
                                <span className=" text-muted  text-capitalize">{d.date}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    )
                })
            }
            </Swiper>
        </>
      );
}



export default ImageSlider;