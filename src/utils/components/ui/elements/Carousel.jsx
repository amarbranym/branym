'use client'

import { useEffect, useState, useRef } from 'react'
import '@/styles/carousel.css'
import { CarouselText, CarouselText2 } from '@/data/imageData'

function Carousel({ data, leftToRight = false, className = '' }) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const wrapper = useRef()

  useEffect(() => {
    const scrollEventHandler = () => {
      const newPosition =
        window.scrollY / (document.body.offsetHeight - window.innerHeight)
      setScrollPosition(newPosition)
    }

    window.addEventListener('scroll', scrollEventHandler)

    return () => {
      window.removeEventListener('scroll', scrollEventHandler)
    }
  }, [])

  return (
    <div ref={wrapper} className={className}>
      <div
        className={`${
          leftToRight ? 'slide-track-left' : 'slide-track'
        } text-white`}
        style={{
          transform: leftToRight
            ? `translateX(calc(${scrollPosition} * 70%))`
            : `translateX(calc(${scrollPosition} * -70%))`,
        }}
      >
        {data.map((item, index) => (
          <div key={index} className="slide p-2 md:p-4">
            <h2
              className={`font-calsans text-[40px] font-extrabold uppercase md:text-[80px] ${item.css}`}
            >
              {item.text}
            </h2>
          </div>
        ))}
      </div>
    </div>
  )
}

const InfiniteCarousel = () => {
  return (
    <div className="  mx-auto flex justify-center">
      <div className="  mt-2 lg:mt-4">
        <div>
          <Carousel data={CarouselText} />
        </div>
        <div className=" mt-2 sm:mt-4">
          <Carousel data={CarouselText2} leftToRight={true} />
        </div>
      </div>
    </div>
  )
}

export default InfiniteCarousel
