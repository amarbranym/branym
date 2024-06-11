import React from 'react'
import { CarouselImages } from '@/data/imageData'
import Carousel from '../Carousel'
import { CarouselText, CarouselText2 } from '@/data/imageData'
import { Container } from '../Container'
import ArrowUpRight from '../icons/ArrowUpRight'
const About = () => {
  return (
    <div className="aboutw-full overflow-hidden ">
      <div className="mx-auto flex justify-center">
        <div>
          <Carousel data={CarouselText} />
          <Carousel data={CarouselText2} leftToRight={true} />
        </div>
      </div>
      <Container className="py-12">
        <div class="grid grid-cols-2 gap-3 font-calsans sm:gap-4 md:grid-cols-8">
          <div class="col-span-2 flex  items-center justify-center rounded-lg bg-[#18181A] xl:h-[25rem] px-8 py-12 sm:col-span-2 sm:row-span-2 lg:p-16 md:col-span-6">
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
          <div class="rounded-lg bg-[#18181A] px-6 py-8 sm:col-span-1 lg:px-8 md:col-span-2">
            <div>
              <h2 className="gradient-text font-calsans text-7xl font-semibold">
                5+
              </h2>
              <p className="uppercase text-white">Years of Experience</p>
            </div>
          </div>
          <div class="rounded-lg bg-[#18181A] px-6 py-8 sm:col-span-1 lg:px-8 md:col-span-2">
            <div className=" relative">
              <div className=" absolute right-0 top-0">
                <ArrowUpRight className="h-6 w-6 text-[#D9D9D9]" />
              </div>
              <h2 className="gradient-text font-calsans text-7xl font-semibold">
                Be
              </h2>{' '}
              <p className="uppercase text-white">our portfolio </p>
            </div>
          </div>
          <div class="rounded-lg aspect-square bg-[#18181A] px-6 py-8 sm:col-span-1 xl:px-10 xl:py-12 md:col-span-2">
              <div className='flex h-full items-end'>
                <div>
                  <span className="gradient-text font-calsans lg:text-[6rem] font-semibold">
                    50+
                  </span>
                  <p className="uppercase text-white">completed projects</p>
                </div>
              </div>
          </div>
          <div class="rounded-lg bg-[#18181A] px-6 py-8 sm:col-span-1 lg:px-8 md:col-span-2">
            <div className="sm:pt-16">
              <h2 className="gradient-text font-calsans text-7xl font-semibold">
                20+
              </h2>
              <p className="uppercase text-white">happy clients</p>
            </div>
          </div>
          <div class="col-span-2 rounded-lg bg-[#EE1153] p-6 lg:p-8 md:col-span-4">
            <div className="relative translate-y-1  pt-16">
              <div className=" absolute right-0 top-0">
                <ArrowUpRight className="h-12 w-12 text-[#D9D9D9]" />
              </div>
              <div className="leading-tight">
                <p className="text-md uppercase text-white ">Our</p>
                <span className="inline-block font-calsans text-7xl font-semibold uppercase text-white ">
                  Story
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About
