'use client'
import React, { useRef, useState, useEffect } from 'react'
import Card from './Card'

const HorizontalScrollCarousel = () => {
  const [totalCards, setNoOfCards] = useState(0)

  useEffect(() => {
    setNoOfCards(8)

    window.addEventListener('scroll', (e) => {
      const start = document
        .getElementById('work-section')
        .getBoundingClientRect().top
      const top = document.getElementById('start-offset').offsetTop

      if (start === 144) {
        document.getElementById('scroller').scrollTo(window.scrollY - top, 0)
      }
    })
  }, [])

  return (
    <>
      <div id="start-offset" className="text-white"></div>
      <div id="work-section" className="sticky top-[144px] h-full">
        <div id="scroller" className=" scrollbar-hide overflow-x-scroll">
          <div className="flex items-center px-3">
            <div className="one-side-width h-4"></div>
            {[...Array(totalCards)].map((_, index) => (
              <CardWrapper key={index}>
                <Card />
              </CardWrapper>
            ))}
            <div className="one-side-width h-4"></div>
            <div className="h-4 px-1"></div>
          </div>
        </div>
      </div>
      <div style={{ height: 'calc(700px * 8)' }}></div>
    </>
  )
}

const CardWrapper = ({ children }) => {
  return <div className="flex-none px-3">{children}</div>
}

export default HorizontalScrollCarousel
