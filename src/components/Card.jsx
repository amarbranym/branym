import React from 'react'
import luxpackerLogo from '@/images/slider/luxpackerslogo.png'
import luxpackerThumbnail from '@/images/slider/luxpackersthumbnail.png'
import Image from 'next/image'
import CurvedTextButton from './CurvedTextButton'
import DownArrow from './icons/DownArrow'
const Card = () => {
  return (
    <div className="max-w-2xl overflow-hidden  rounded-lg border-[0.5px]   border-gray-500 sm:w-[30rem] lg:w-[35rem] xl:w-[42rem] ">
      <div className="cardGradient w-full ">
        <div className="flex w-full items-center justify-center px-4 py-10 md:px-0 md:py-16">
          <Image
            src={luxpackerLogo}
            alt="logo"
            className=" max-w-64 scale-50 sm:scale-75"
          />
        </div>
        <div className="w-full object-contain px-4 md:px-8  ">
          <Image
            src={luxpackerThumbnail}
            alt=""
            className="m-auto h-full w-full rounded-t-sm "
          />
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#18181A] to-[#0F0F10] p-4  md:p-8">
        <div className="my-2 flex flex-wrap gap-4">
          <span class=" inline-block rounded-lg bg-[#3100BB] px-2  text-sm font-extralight uppercase text-white ">
            ui/ux design
          </span>
          <span class=" inline-block rounded-lg bg-[#C25A0F] px-2  text-sm font-extralight uppercase text-white ">
            Motain design
          </span>
          <span class=" inline-block rounded-lg bg-[#1F9B94] px-2  text-sm font-extralight uppercase text-white ">
            graphic design
          </span>
        </div>
        <div className="mt-6 text-white">
          <p className="text-[1rem] font-light">
            A short description explaining the solution for a pain point related
            to QSR . Ideally this will be an animated event. The next options
            are hidden until it scrolls through, or someone scrolls over the
            headline.
          </p>
        </div>
        <div className=" my-6 flex items-center justify-between gap-2">
          <div className="flex h-[100px] w-[100px] items-center justify-center">
            <h2 className="font-Chloe text-7xl font-bold text-white ">01</h2>
          </div>
          <div className=" w-[60%]">
            <hr />
          </div>
          <div className=" flex h-[100px] w-[100px] items-center justify-center ">
            <CurvedTextButton
              text="out live site check out live site check"
              className=""
            >
              <DownArrow className=" h-6 w-6 -rotate-[120deg] " />
            </CurvedTextButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
