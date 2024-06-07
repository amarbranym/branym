import React from 'react'
import { Container } from '../Container'
import BlueGradient from '../BlueGradient'
import CurvedTextButton from '../CurvedTextButton'
import DownArrow from '../icons/DownArrow'

const Hero = () => {
  return (
    <section className="hero_bg relative flex min-h-[40rem] overflow-hidden sm:h-screen sm:min-h-[60rem] ">
      <div className="z-[1]">
        <div className="absolute left-0  right-0 top-0  h-[400px] w-full bg-gradient-to-b from-black/70 to-black/0"></div>
        <div className="transfrom absolute bottom-0  left-1/2  -translate-x-1/2 object-cover ">
          <BlueGradient />
        </div>
      </div>
      <div className="z-[2] flex-1">
        <Container className="flex h-full items-center justify-center">
          <h2 className="-mt-16 text-center font-calsans text-[3.5rem] font-bold leading-tight  text-white  sm:text-[5.5rem] md:-mt-32 lg:text-[7.5rem]">
            Experience <br />
            that converts <br />
            audience.
          </h2>

          <div className="absolute bottom-0 left-0 right-0 w-screen p-8">
            <div className=" relative flex  w-full scale-75  items-center  justify-center text-white  md:scale-100">
              <CurvedTextButton />
              <div className=" absolute left-1/2  -translate-x-1/2 cursor-pointer ">
                <DownArrow />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default Hero
