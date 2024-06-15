'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import clsx from 'clsx'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import DubaleCots from '../icons/DubaleCots'
import { clients } from '@/data/imageData'
import IconButton from '../buttons/IconButton'
import ArrowRight from '../icons/ArrowRight'
import ArrowLeft from '../icons/ArrowLeft'

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
    <div className=" rounded-2xl  bg-gradient-to-r from-[#18181A] to-[#0F0F10]">
      <Swiper
        onSwiper={setThumbsSwiper}
        // loop={true}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1.5,
            spaceBetween: 0,
          },
          480: {
            slidesPerView: 2.2,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          970: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          // when window width is >= 640px
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        // freeMode={true}
        // watchSlidesProgress={true}
        modules={[Thumbs]}
        className="mySwiperTab  border-b border-gray-700 !px-4 md:!px-12 lg:!px-20"
      >
        {clients.map((client, index) => (
          <SwiperSlide key={client.id}>
            <div className="h-[120px]">
              <img
                src={client?.logo?.url}
                alt={client?.companyName}
                unoptimized
                className={
                  '!object-contain ' +
                  (activeIndex === index
                    ? 'brightness-1'
                    : 'opacity-40 brightness-[20]')
                }
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="md:p-3">
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
            <SwiperSlide className="px-6  sm:px-10 lg:px-20" key={client.id}>
              <h3 className=" font-review text-2xl font-bold text-white md:text-3xl lg:text-6xl">
                {client.review}
              </h3>
            </SwiperSlide>
          ))}

          <div className=" mx-6  mb-6 mt-6 flex items-center justify-between  text-white    sm:mx-10 sm:mb-10  lg:mx-20 lg:mb-20">
            <div className="">
              <h4 className=" text-2xl font-bold sm:text-3xl">
                {clients[activeIndex]?.ownerName}
              </h4>
              <p className="mt-1 text-sm font-extralight text-white sm:text-lg">
                {clients[activeIndex]?.designation}
              </p>
            </div>
            <div className="flex gap-3">
              <div>
                <IconButton
                  disabled={activeIndex < 1}
                  className=" rounded-xl p-1"
                  onClick={goPrev}
                >
                  <ArrowLeft className=" h-4 w-4 "/>
                </IconButton>
              </div>
              <div>
                <IconButton
                  disabled={activeIndex >= clients.length - 1}
                  className=" rounded-xl p-1 "
                  onClick={goNext}
                >
                  <ArrowRight className=" h-4 w-4" />
                </IconButton>
              </div>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  )
}

export default MyClient
