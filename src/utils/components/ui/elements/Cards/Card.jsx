'use client'
import React from 'react'
import luxpackerLogo from '@/images/slider/luxpackerslogo.png'
import luxpackerThumbnail from '@/images/slider/luxpackersthumbnail.png'
import Image from 'next/image'
import CurvedTextButton from '../CurvedTextButton'
import DownArrow from '../../icons/DownArrow'
import Badge from '../Badge'
const Card = ({ item, index }) => {
  return (
    <div
      key={item?.id}
      className="sm:min-w-screen cursor-pointer group max-w-2xl overflow-hidden rounded-2xl border-[0.5px]   border-gray-500 sm:w-auto lg:w-[30rem] xl:w-[35rem] "
    >
      <div className="w-full relative overflow-hidden"> 
        <div 
          className='absolute top-[-50%] scale-[0.8] brightness-[1.3] opacity-30 group-hover:scale-[1.8] group-hover:opacty-100 left-0 right-0 bottom-0 w-full h-full transition duration-[500ms]' 
          style={{background: `radial-gradient(${item?.color?.hex}, ${item?.color?.hex}00 80%)`,}}
        ></div>
        <div className="relative flex h-[160px] items-center transition group-hover:scale-[1.05] justify-center">
          <img
            src={item?.logo?.url}
            alt="logo"
            className="max-h-[56px] w-full max-w-[256px] object-contain brightness-[50]"
          />
        </div>
        <div className="relative max-h-[300px] px-[5%] transition translate-y-[16px] group-hover:translate-y-[0px]">
          <img src={item?.coverImage?.url} alt="" className="h-full w-full" />
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#18181A] to-[#0F0F10] p-4  md:p-8">
        <div className="flex flex-wrap gap-2">
          {item?.services.map((value, index) => (
            <Badge text={value} key={index} />
          ))}
        </div>
        <div className=" mt-3 text-white">
          <p className=" line-clamp-3 text-sm font-light lg:text-lg">
            {item.description}
          </p>
        </div>
        <div className=" flex items-center justify-between gap-2 lg:mt-6">
          <div className="flex h-[100px]  items-center justify-start ">
            <h2 className="font-Chloe text-7xl font-bold text-white ">
              {index > 9 ? index : `0${index + 1}`}
            </h2>
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
