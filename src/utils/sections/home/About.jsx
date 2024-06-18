import React from 'react'
import { Container } from '../../components/ui/elements/Container'
import ArrowIcon from '../../components/ui/icons/ArrowIcon'
import Fade from '../../components/ui/elements/Fade'
import InfiniteCarousel from '../../components/ui/elements/Carousel'
const About = () => {
  return (
    <div className="about w-full overflow-hidden ">
      <InfiniteCarousel />
      <Container className="py-12">
        <div className="grid grid-cols-2 gap-3 font-calsans sm:gap-4 md:grid-cols-8">
          <Fade
            data-aos="fade-up"
            data-aos-delay="50"
            className="  col-span-2 flex  items-center justify-center rounded-2xl bg-[#18181A] px-4 py-12 sm:col-span-5 sm:row-span-2 sm:px-6 lg:p-16 xl:col-span-6 xl:h-[25rem]"
          >
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
          </Fade>
          <Fade
            data-aos="fade-up"
            data-aos-delay="100"
            className=" aspect-square rounded-2xl   bg-[#18181A] p-4 sm:col-span-3 sm:aspect-auto sm:p-6 lg:px-8 xl:col-span-2"
          >
            <div className="flex h-full items-end">
              <div>
                <span className="gradient-text font-calsans text-7xl font-semibold lg:text-[6rem]">
                  5+
                </span>
                <p className="text-xs uppercase text-white md:text-lg">
                  YEARS OF EXPERIENCE
                </p>
              </div>
            </div>
          </Fade>
          <Fade
            data-aos="fade-up"
            data-aos-delay="150"
            className=" aspect-square rounded-2xl bg-[#18181A] p-4 sm:col-span-3 sm:aspect-auto sm:p-6 xl:col-span-2 xl:px-10 xl:py-10"
          >
            <div className=" relative h-full">
              <div className=" absolute right-0 top-0">
                <ArrowIcon className="h-[24px] w-[24px] text-[#D9D9D9]" />
              </div>
              <div className="flex h-full items-end ">
                <div>
                  <span className="gradient-text font-calsans text-7xl font-semibold lg:text-[6rem]">
                    Be
                  </span>{' '}
                  <p className="text-xs uppercase text-white md:text-lg">
                    our portfolio{' '}
                  </p>
                </div>
              </div>
            </div>
          </Fade>
          <Fade
            data-aos="fade-up"
            data-aos-delay="200"
            className="aspect-square rounded-2xl bg-[#18181A] p-4  sm:col-span-2 sm:p-6 xl:col-span-2 xl:px-10 xl:py-12"
          >
            <div className="flex h-full items-end">
              <div>
                <span className="gradient-text font-calsans text-7xl font-semibold lg:text-[6rem]">
                  50+
                </span>
                <p className="flex gap-0.5 text-xs uppercase text-white md:text-lg ">
                  <span className="sm:hidden xl:block">completed</span> projects
                </p>
              </div>
            </div>
          </Fade>
          <Fade
            data-aos="fade-up"
            data-aos-delay="250"
            className="aspect-square rounded-2xl bg-[#18181A] p-4 sm:col-span-2 sm:p-6 xl:col-span-2 xl:px-10 xl:py-12"
          >
            <div className="flex h-full items-end">
              <div>
                <span className="gradient-text font-calsans text-7xl font-semibold lg:text-[6rem]">
                  20+
                </span>
                <p className="text-xs uppercase text-white md:text-lg">
                  happy clients
                </p>
              </div>
            </div>
          </Fade>
          <Fade
            data-aos="fade-up"
            data-aos-delay="350"
            className="  col-span-2 rounded-2xl bg-[#EE1153] p-4 sm:col-span-4 sm:px-6 lg:p-8 xl:px-10 xl:py-12"
          >
            <div className="relative h-full  translate-y-1 pt-12 sm:pt-0 ">
              <div className=" absolute right-0 top-0">
                <ArrowIcon className=" h-6 w-6 text-[#D9D9D9] sm:h-12 sm:w-12" />
              </div>
              <div className="flex h-full items-end leading-tight">
                <div>
                  <p className="text-md text-xs uppercase text-white md:text-lg ">
                    Our
                  </p>
                  <span className="inline-block font-calsans text-7xl font-semibold uppercase text-white ">
                    Story
                  </span>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </Container>
    </div>
  )
}

export default About
