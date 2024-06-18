import React from 'react'
import BlueGradient from '../gradients/BlueGradient'
import Fade from './Fade'

const ReusableHero = ({ title, icon: IconComponent, children }) => {
  return (
    <section className="hero_bg flex w-full overflow-hidden ">
      <div className="relative w-full">
        <Fade
          data-aos="fade-up"
          data-aos-delay="50"
          className="relative z-[50] flex w-full justify-center pb-32 pt-[20rem]"
        >
          <h1 className="font-sans text-4xl font-semibold uppercase text-white">
            {title}
          </h1>
        </Fade>
        <div className="absolute bottom-0 left-1/2 z-[10] -translate-x-1/2">
          {IconComponent && <IconComponent className="w-screen scale-110" />}
        </div>
        <div className="absolute left-1/2 top-0 z-[15] -translate-x-1/2 rotate-180 transform object-cover">
          <BlueGradient />
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-[20] h-[300px] w-full bg-gradient-to-t from-black/100 to-black/0"></div>
        {children}
      </div>
    </section>
  )
}

export default ReusableHero
