import React from 'react'
import { Container } from '../../components/ui/elements/Container'
import BlueGradient from '../../components/ui/gradients/BlueGradient'
import WhoWeAre from '@/utils/components/ui/icons/WhoWeAre'
import StrokeButton from '@/utils/components/ui/buttons/StrokeButton'
import PlayIcon from '@/utils/components/ui/icons/PlayIcon'

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
            <WhoWeAre className="w-screen scale-100" />
          </div>
          <div className="transfrom absolute left-1/2 top-0  z-[15]    -translate-x-1/2  rotate-180 object-cover   ">
            <BlueGradient />
          </div>

          <div className="absolute bottom-0 left-0 right-0  z-[20]  h-[300px] w-full bg-gradient-to-t from-black/100 to-black/0"></div>
        </div>
      </section>

      <section className=" w-full pb-20  pt-10">
        <Container className="">
          <div className="   text-7xl font-semibold ">
            <p className="text-center text-white font-calsans ">
              We are a design agency based in India. We’ve worked with 20+
              clients over 5 years and delivering{' '}
              <span className="text-[#FF720D]"> tailor-made solutions </span>{' '}
              that actually fits their vision. Since our inception, we have been
              committed to pushing the boundaries of creativity and innovation.
            </p>
          </div>
          <div className=" relative mt-20   h-[673px] w-full rounded-[48px] border-4 border-gray-500  bg-gradient-to-r from-[#18181A] to-[#0F0F10]">
            <div className=" absolute bottom-8 left-4 ">
              <StrokeButton className="flex items-center gap-2 ">
                <div>
                  <PlayIcon className="h-4 w-4" />
                </div>
                <span>Watch Video </span>
              </StrokeButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Hero
