import React from 'react'
import ArrowUpRight from './icons/ArrowUpRight'

const LetsTalk = () => {
  return (
    <div className='py-12 lg:py-32'>
      <div className="text-center mb-12 lg:mb-24">
        <h1 className="text-7xl lg:text-[7.5rem] font-semibold text-white">Let's Talk</h1>
      </div>
      <div class=" my-14 grid grid-cols-2 grid-rows-4 gap-3 font-calsans sm:gap-4 lg:grid-cols-8">
        {/* ***** */}

        <div class="col-span-2 flex  items-center justify-center rounded-lg bg-[#18181A] p-4 sm:col-span-2  row-span-4  lg:col-span-4 lg:p-8"></div>

        {/* ***** */}

        <div class="rounded-lg bg-[#18181A] px-4 lg:h-[15rem] col-span-2 sm:col-span-1   lg:col-span-2 lg:row-span-2 xl:px-10 py-6 lg:py-8 ">
          <div className=" relative flex  h-full flex-col justify-end">
            <div className=" absolute right-0 top-0">
              <ArrowUpRight className="h-10 w-10 text-[#D9D9D9]" />
            </div>
            <div className="pt-12 px-3 lg:p-0">
              <span className=" font-calsans text-md uppercase  text-white ">
                Email us
              </span>{' '}
              <p className=" font-sans text-2xl font-extrabold text-white"> info@branym.com </p>
            </div>
          </div>
        </div>

        {/* **** */}

        <div class="rounded-lg bg-[#18181A] px-4 lg:h-[15rem] col-span-2 sm:col-span-1   lg:col-span-2 lg:row-span-2 xl:px-10 py-6 lg:py-8 ">
          <div className=" relative flex  h-full flex-col justify-end">
            <div className=" absolute right-0 top-0">
              <ArrowUpRight className="h-10 w-10 text-[#D9D9D9]" />
            </div>
            <div className="pt-12 px-3 lg:p-0">
              <span className=" font-calsans text-md uppercase  text-white ">
                Give Us a Call
              </span>{' '}
              <p className=" font-sans md:text-2xl lg:text-xl xl:text-2xl font-extrabold text-white">+91 708-736-2779</p>
            </div>
          </div>
        </div>

        {/* ***** */}
        <div class="col-span-full rounded-lg bg-[#18181A] px-4 sm:col-span-2   lg:col-span-4 lg:row-span-2 lg:px-10 py-6 lg:py-10">
          <div className="flex justify-between text-white items-center h-full">
            <div className="flex flex-col justify-end py-4 px-2 lg:p-0">
              <h3 className="font-calsans text-3xl lg:text-5xl">
                Book a Free <br /> Call Today
              </h3>
              <div className="flex items-center mt-2 gap-2 font-sans text-md font-bold">
                <div className='rounded-full w-2 h-2 bg-green-500'></div> 
                <p className='mb-0'>3 Slots Avaiable</p>
              </div>
            </div>
            <div className="h-[100px]  w-[100px] rounded-[2rem] border border-white"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LetsTalk
