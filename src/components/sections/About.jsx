import React from 'react'
import { CarouselImages } from '@/data/imageData'
import Carousel from '../Carousel'
import { CarouselText, CarouselText2 } from '@/data/imageData'
import { Container } from '../Container'
import ArrowIcon from '../icons/ArrowIcon'
const About = () => {
  return (
    <div className="aboutw-full overflow-hidden ">
      <div className="mx-auto flex justify-center">
        <div className='mt-2 lg:mt-6'>
          <div>

          <Carousel data={CarouselText} />
          </div>
          <div className='lg:mt-6'>

          <Carousel data={CarouselText2} leftToRight={true} />
          </div>
        </div>
      </div>
      <Container className="py-12">
        <div class="grid grid-cols-2 gap-3 font-calsans sm:gap-4 md:grid-cols-8">
          <div class="  col-span-2 flex  items-center justify-center rounded-lg bg-[#18181A] px-4 sm:px-6 py-12 sm:col-span-2 sm:row-span-2 md:col-span-6 lg:p-16 xl:h-[25rem]">
            <div className="  ">
              <h2 className="gradient-text text-xl font-semibold uppercase">
                about us
              </h2>
              <p className="mt-4 text-xl font-bold text-white sm:text-2xl xl:text-3xl">
                We are a design agency based in India. We’ve worked with 20+
                clients over 5 years and delivering{' '}
                <span className="text-[#FF720D]">tailor-made solutions</span>{' '}
                that actually fits their vision. Since our inception, we have
                been committed to pushing the boundaries of creativity and
                innovation.
              </p>
            </div>
          </div>
          <div class="  rounded-lg bg-[#18181A] px-4 sm:px-6 py-8 sm:col-span-1 md:col-span-2 lg:px-8">
            <div className="flex h-full items-end">
              <div>
                <span className="gradient-text text-7xl font-calsans font-semibold lg:text-[6rem]">
                  5+
                </span>
                <p className="uppercase text-white">YEARS OF EXPERIENCE</p>
              </div>
            </div>
          </div>
          <div class=" rounded-lg bg-[#18181A] px-4 sm:px-6 py-8 sm:col-span-1 md:col-span-2 xl:px-10 xl:py-10">
            <div className=" relative h-full">
              <div className=" absolute right-0 top-0">
                <ArrowIcon className="h-[24px] w-[24px] text-[#D9D9D9]" />
              </div>
              <div className="flex h-full items-end ">
                <div>
                  <span className="gradient-text text-7xl font-calsans font-semibold lg:text-[6rem]">
                    Be
                  </span>{' '}
                  <p className="uppercase text-white">our portfolio </p>
                </div>
              </div>
            </div>
          </div>
          <div class="aspect-square rounded-lg bg-[#18181A] px-4 sm:px-6 py-8 sm:col-span-1 md:col-span-2 xl:px-10 xl:py-12">
            <div className="flex h-full items-end">
              <div>
                <span className="gradient-text font-calsans font-semibold text-7xl lg:text-[6rem]">
                  50+
                </span>
                <p className="uppercase text-white">completed projects</p>
              </div>
            </div>
          </div>
          <div class="aspect-square rounded-lg bg-[#18181A] px-4 sm:px-6 py-8 sm:col-span-1 md:col-span-2 xl:px-10 xl:py-12">
            <div className="flex h-full items-end">
              <div>
                <span className="gradient-text font-calsans font-semibold text-7xl lg:text-[6rem]">
                  20+
                </span>
                <p className="uppercase text-white">happy clients</p>
              </div>
            </div>
          </div>
          <div class="col-span-2 rounded-lg bg-[#EE1153] px-4 sm:px-6 py-8 md:col-span-4 lg:p-8 xl:px-10 xl:py-12">
            <div className="relative h-full  translate-y-1 ">
              <div className=" absolute right-0 top-0">
                <ArrowIcon className=" text-[#D9D9D9]" />
              </div>
              <div className="flex h-full items-end leading-tight">
                <div>
                  <p className="text-md uppercase text-white ">Our</p>
                  <span className="inline-block font-calsans text-7xl font-semibold uppercase text-white ">
                    Story
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About
