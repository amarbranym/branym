'use client'

import { useEffect, useState, useRef } from 'react'
import '@/styles/carousel.css'

function Carousel({ data, leftToRight = false, className = '' }) {
  const [scrollPosition, setScrollPosition] = useState(0)

  const wrapper = useRef()

  useEffect(() => {
    const scrollEventHandler = () => {
      const newPosition = window.scrollY / (document.body.offsetHeight - window.innerHeight)
      const offset = window.innerHeight - wrapper.current.getBoundingClientRect().y

      if(offset > 0 && offset , window.innerHeight){
        setScrollPosition(newPosition)
      }
    }

    window.addEventListener('scroll', scrollEventHandler)

    return () => {
      window.removeEventListener('scroll', scrollEventHandler)
    }
  }, [])

  return (
    <div ref={wrapper} className={"" + className}>
      <div
        className={
          leftToRight
            ? 'slide-track-left  text-white'
            : 'slide-track  text-white'
        }
        style={{
          '--scroll': scrollPosition * 5,
        }}
      >
        {data.map((item) => (
          <div class="slide p-2 md:p-4">
            <h2
              className={`font-calsans text-[40px] md:text-[80px] font-extrabold uppercase ${item.css} `}
            >
              {item.text}
            </h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
