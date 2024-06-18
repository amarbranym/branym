import React from 'react'
import Image from 'next/image'
import Yuvraj from '@/images/yuvraj.png'
import Linkdin from '../../icons/Social/Linkdin'
import Instagram from '../../icons/Social/Instagram'
import Twitter from '../../icons/Social/Twitter'

const TeamCard = ({ item }) => {
  const bgColor = ['#999999', '#BD1784', '#3100BB', '#F43636', '#FFAE33']
  return (
    <div
      key={item?.id}
      className="flex flex-col items-center gap-6 rounded-xl border border-gray-100 p-4 sm:flex-row lg:w-[48rem]  "
    >
      <div className="  h-[409px] min-w-[20rem]  rounded-md  ">
        <img
          src={item?.picture?.url}
          alt=""
          className=" h-full  w-full rounded-md  object-cover "
          // width={300}
          // height={500}
        />
      </div>

      <div className="flex flex-col gap-4  ">
        <h4 className="font-calsans text-4xl text-white">{item?.name}</h4>
        <div className="flex flex-wrap gap-2 ">
          {item.designation.map((value, index) => (
            <span
              className={` inline-block rounded-lg bg-[${bgColor[index]}] px-2  text-sm font-extralight uppercase text-white `}
            >
              {value}
            </span>
          ))}
        </div>
        <div className="text-lg !leading-tight text-white lg:pr-8">
          <p>{item.description}</p>
        </div>
        <div className="flex gap-2">
          <Instagram />
          <Linkdin />
          <Twitter />
        </div>
      </div>
    </div>
  )
}

export default TeamCard
