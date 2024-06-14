'use client'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'

const AutoplayCarousel = ({ images, rtl = false }) => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1,
    cssEase: 'linear',
    rtl: rtl,
  }

  return (
    <Slider {...settings}>
      {images.map((item, index) => (
        <div className=" object-contain ">
          <Image
            key={index}
            src={item}
            alt={`Image ${index}`}
            width={200}
            height={100}
            className=" object-center"
          />
        </div>
      ))}
    </Slider>
  )
}

export default AutoplayCarousel
