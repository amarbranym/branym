import React from 'react'
import { Container } from '../../Container'
import BlueGradient from '../../BlueGradient'
import WhoIons from '@/components/icons/WhoIons'
import StrokeButton from '@/components/StrokeButton'

const Hero = () => {
  return (
    <>
      <section className="hero_bg flex w-full overflow-hidden ">
        <div className="relative w-full">
          <div className="relative z-[50] flex w-full justify-center pb-32 pt-[20rem]">
            <h1 className="font-sans text-4xl font-semibold uppercase text-white">
              About us
            </h1>
          </div>
          <div className="absolute bottom-0 left-1/2 z-[10]  -translate-x-1/2">
            <WhoIons className="w-screen scale-100" />
          </div>
          <div className="transfrom absolute left-1/2 top-0  z-[15]    -translate-x-1/2  rotate-180 object-cover   ">
            <BlueGradient />
          </div>

          <div className="absolute bottom-0 left-0 right-0  z-[20]  h-[300px] w-full bg-gradient-to-t from-black/100 to-black/0"></div>
        </div>
      </section>

      <section className=" pt-10 pb-20  w-full">
        <Container className="">
          <div className="  font-sans text-7xl font-semibold ">
            <p className="text-center text-white">
              We are a design agency based in India. We’ve worked with 20+
              clients over 5 years and delivering{' '}
              <span className="text-[#FF720D]"> tailor-made solutions </span>{' '}
              that actually fits their vision. Since our inception, we have been
              committed to pushing the boundaries of creativity and innovation.
            </p>
          </div>
          <div className=" mt-20 relative   h-[673px] w-full rounded-[48px] border-4 border-gray-500  bg-gradient-to-r from-[#18181A] to-[#0F0F10]">
            <div className=" absolute bottom-8 left-4 ">
              <StrokeButton>Watch Video</StrokeButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Hero
