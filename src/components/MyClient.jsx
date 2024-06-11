'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import clsx from 'clsx'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import DubaleCots from './DubaleCots'
import { clients } from '@/data/imageData'

const MyClient = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const [swiper, setSwiper] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0) // State to store active index

  const handleSlideChange = (e) => {
    console.log(swiper?.activeIndex)
    setActiveIndex(swiper?.activeIndex || 0) // Update active index when slide changes

  }

  const goNext = () => {
    if (swiper) {
      swiper.slideNext()
    }
  }

  const goPrev = () => {
    if (swiper) {
      swiper.slidePrev()
    }
  }

  useEffect(() => {
    if (swiper) {
      swiper.on('slideChange', handleSlideChange) // Add event listener for slide change
    }
  }, [swiper])


  console.log('active', activeIndex)
  return (
    <div className=" rounded-md  bg-gradient-to-r from-[#18181A] to-[#0F0F10]">
      <Swiper
        onSwiper={setThumbsSwiper}
        // loop={true}
        breakpoints = {{
          // when window width is >= 320px
          320: {
            slidesPerView: 1.5,
            spaceBetween: 0,
          },
          480:{
            slidesPerView: 2.2,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 20
          },
          970: {
            slidesPerView: 3.5,
            spaceBetween: 20
          },
          // when window width is >= 640px
          1280: {
            slidesPerView: 4,
            spaceBetween: 20
          }
        }}
        // freeMode={true}
        // watchSlidesProgress={true}
        modules={[Thumbs]}
        className="mySwiperTab  border-b border-gray-700 !px-4 md:!px-12 lg:!px-20"
      >
        {clients.map((client, index) => (
          <SwiperSlide
            key={client.id}
          >
            <div className="h-[120px]">
              <img
                src={client?.logo?.url}
                alt={client?.companyName}
                unoptimized
                className={"!object-contain " + (activeIndex === index ? 'brightness-1' : 'brightness-[20] opacity-40')}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='md:p-3'>
      <div className="px-6 pb-6 pt-6 sm:px-10 sm:pt-10 md:pt-20 lg:px-20  ">
        <DubaleCots />
      </div>
      <Swiper
        onSwiper={setSwiper}
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2  relative "
      >
        {clients?.map((client, index) => (
          <SwiperSlide
            className="px-6  sm:px-10 lg:px-20"
            key={client.id}
          >
            <h3
              className=" text-2xl md:text-3xl text-white lg:text-6xl font-review font-bold"
            >
              {client.review}
            </h3>
          </SwiperSlide>
        ))}

        <div className=" mx-6  mb-6 mt-6 flex items-center justify-between  text-white    sm:mx-10 sm:mb-10  lg:mx-20 lg:mb-20">
          <div className="">
            <h4 className=" text-2xl sm:text-3xl font-bold">{clients[activeIndex]?.ownerName}</h4>
            <p className="mt-1 text-sm sm:text-lg text-white font-extralight">
              {clients[activeIndex]?.designation}
            </p>
          </div>
          <div className="flex gap-3">
            <div>
              <button disabled={activeIndex < 1} className="rounded-lg bg-[#4D4D50] p-1" onClick={goPrev}>
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
            </div>
            <div>
              <button disabled={activeIndex >= (clients.length - 1)} className="rounded-lg bg-[#4D4D50] p-1 " onClick={goNext}>
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Swiper>
      </div>
    </div>
  )
}

export default MyClient
