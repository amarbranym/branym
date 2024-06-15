// 'use client'
// import React, { useRef, useState, useEffect } from 'react'
// import Card from './Cards/Card'
// import Fade from './Fade'

// const HorizontalScrollCarousel = () => {
//   const [totalCards, setNoOfCards] = useState(0)

//   useEffect(() => {
//     setNoOfCards(8)

//     window.addEventListener('scroll', (e) => {
//       const start = document
//         .getElementById('work-section')
//         .getBoundingClientRect().top
//       const top = document.getElementById('start-offset').offsetTop

//       if (start === 144) {
//         document.getElementById('scroller').scrollTo(window.scrollY - top, 0)
//       }
//     })
//   }, [])

//   return (
//     <>
//       <div id="start-offset" className="text-white"></div>
//       <div id="work-section" className="sticky top-[144px] h-full">
//         <div id="scroller" className=" scrollbar-hide overflow-x-scroll">
//           <div className="flex items-center px-3">
//             <div className="one-side-width h-4"></div>
//             {[...Array(totalCards)].map((_, index) => (
//               <CardWrapper key={index} index={index}>
//                 <Card />
//               </CardWrapper>
//             ))}
//             <div className="one-side-width h-4"></div>
//             <div className="h-4 px-1"></div>
//           </div>
//         </div>
//       </div>
//       <div style={{ height: 'calc(700px * 8)' }}></div>
//     </>
//   )
// }

// const CardWrapper = ({ children, index }) => {
//   return (
//     <Fade data-aos="fade-up" data-aos-delay={`${(index + 2) * 100}`} className="flex-none px-3">
//       {children}
//     </Fade>
//   )
// }

// export default HorizontalScrollCarousel
'use client'
import React, { useRef, useState, useEffect } from 'react'
import Fade from './Fade'

const headerStart = 144;

const HorizontalScrollCarousel = ({ children = () => {}, data = [] }) => {

  const scrollerRef = useRef(null)
  const startOffsetRef = useRef(null)
  const workSectionRef = useRef(null)

  const [w, setW] = useState(0)

  useEffect(() => {

    const width = document.getElementById('work-wrapper-0').getBoundingClientRect().width
    setW(width)

    const handleScroll = () => {

      const start = workSectionRef.current?.getBoundingClientRect().top
      const top = startOffsetRef.current?.offsetTop

      if (start === headerStart && scrollerRef.current) {
        scrollerRef.current.scrollTo(window.scrollY - top, 0)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div ref={startOffsetRef} id="start-offset" className="text-white"></div>
      <div
        ref={workSectionRef}
        className="sticky top-[144px] h-full"
      >
        <div
          ref={scrollerRef}
          className="scrollbar-hide lg:overflow-x-scroll"
        >
          <div className="flex flex-wrap gap-y-4 lg:flex-nowrap items-center lg:px-3">
            <div className="one-side-width h-4"></div>
            {data.map((item, index) => (
              <div id={'work-wrapper-' + index}>
                <CardWrapper>
                  {children(item, index)}
                </CardWrapper>
              </div>
            ))}
            <div className="one-side-width h-4"></div>
            <div className="h-4 px-1"></div>
          </div>
        </div>
      </div>
      <div className='hidden lg:block' style={{ height: `calc((${w}px * ${data.length}) - 1136px + ${headerStart}px)` }}></div>
    </>
  )
}

const CardWrapper = ({ children, index }) => {
  return (
    <Fade
      data-aos="fade-up"
      data-aos-delay={`${(index + 2) * 100}`}
      className="flex-none px-3"
    >
      {children}
    </Fade>
  )
}

export default HorizontalScrollCarousel
