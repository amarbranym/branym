'use client'

import { useEffect, useState } from 'react'
import '../styles/carousel.css'

function Carousel({ data, leftToRight = false, className = '' }) {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const scrollEventHandler = () => {
      const newPosition =
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      setScrollPosition(newPosition)
    }

    window.addEventListener('scroll', scrollEventHandler)

    return () => {
      window.removeEventListener('scroll', scrollEventHandler)
    }
  }, [])

  return (
    <div className={className}>
      <div
        className={
          leftToRight
            ? 'slide-track-left  text-white '
            : 'slide-track  text-white '
        }
        style={{
          '--scroll': scrollPosition,
        }}
      >
        {data.map((item) => (
          <div class="slide p-4 ">
            <h2
              className={`font-calsans text-[80px] font-extrabold uppercase ${item.css} `}
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
