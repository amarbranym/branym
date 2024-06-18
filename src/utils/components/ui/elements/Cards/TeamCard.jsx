import React from 'react'
import Image from 'next/image'
import Yuvraj from '@/images/yuvraj.png'
import Linkdin from '../../icons/Social/Linkdin'
import Instagram from '../../icons/Social/Instagram'
import Twitter from '../../icons/Social/Twitter'
import Badge from '../Badge'

const TeamCard = ({ item }) => {
  return (
    <div
      key={item?.id}
      className="flex flex-col items-center gap-6 rounded-xl border border-gray-100 p-4 sm:min-w-[40rem] sm:flex-row lg:min-w-[48rem]  "
    >
      <div className=" w-full min-w-[20rem] rounded-md  object-cover sm:h-[409px]  ">
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
            <Badge text={value} key={index} />
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
