'use client'
import React from 'react'
import ArrowIcon from './icons/ArrowIcon'
import Fade from './utils/Fade'

const LetsTalk = () => {
  return (
    <div className="py-12 lg:py-32">
      <div className="mb-12 text-center lg:mb-24">
        <h1 className="text-7xl font-semibold text-white lg:text-[7.5rem]">
          Let's Talk
        </h1>
      </div>
      <div class=" my-14 grid grid-cols-2 grid-rows-4 gap-3 font-calsans sm:gap-4 lg:grid-cols-8">
        {/* ***** */}
        <Fade
          data-aos="fade-up"
          data-aos-delay="400"
          class="col-span-2 row-span-4  flex items-center justify-center rounded-lg bg-[#18181A] p-4  sm:col-span-2  lg:col-span-4 lg:p-8"
        ></Fade>
        {/* ***** */}
        <Fade
          data-aos="fade-up"
          data-aos-delay="500"
          class="col-span-2 rounded-lg bg-[#18181A] px-4 py-6 sm:col-span-1   lg:col-span-2 lg:row-span-2 lg:h-[15rem] lg:py-8 xl:px-8 "
        >
          <div className=" relative flex  h-full flex-col justify-end">
            <div className=" absolute right-0 top-0">
              <ArrowIcon className="h-6 w-6 text-[#D9D9D9]" />
            </div>
            <div className="px-3 pt-12 lg:p-0">
              <span className=" text-md font-calsans uppercase  text-white ">
                Email us
              </span>{' '}
              <p className=" font-sans text-2xl font-extrabold text-white">
                {' '}
                info@branym.com{' '}
              </p>
            </div>
          </div>
        </Fade>

        {/* **** */}
        <Fade
          data-aos="fade-up"
          data-aos-delay="450"
          class="col-span-2 rounded-lg bg-[#18181A] px-4 py-6 sm:col-span-1   lg:col-span-2 lg:row-span-2 lg:h-[15rem] lg:py-8 xl:px-8 "
        >
          <div className=" relative flex h-full  w-full flex-col justify-end">
            <div className=" absolute right-0 top-0">
              <ArrowIcon className="h-6 w-6 text-[#D9D9D9]" />
            </div>
            <div className="px-3 pt-12 lg:p-0">
              <span className=" text-md font-calsans uppercase  text-white ">
                Give Us a Call
              </span>{' '}
              <p className=" font-sans font-extrabold text-white md:text-2xl lg:text-xl xl:text-2xl">
                +91 708-736-2779
              </p>
            </div>
          </div>
        </Fade>
        {/* ***** */}
        <Fade
          data-aos="fade-up"
          data-aos-delay="500"
          class="col-span-full rounded-lg bg-[#18181A] px-4 py-6   sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:px-8 lg:py-10"
        >
          <div className="flex h-full items-center justify-between text-white">
            <div className="flex flex-col justify-end px-2 py-4 lg:p-0">
              <h3 className="font-calsans text-3xl lg:text-5xl">
                Book a Free <br /> Call Today
              </h3>
              <div className="text-md mt-2 flex items-center gap-2 font-sans font-bold">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <p className="mb-0">3 Slots Avaiable</p>
              </div>
            </div>
            <div className="h-[100px]  w-[100px] rounded-[2rem] border border-white"></div>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default LetsTalk
