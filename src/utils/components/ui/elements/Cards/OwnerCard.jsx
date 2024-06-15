import React from 'react'
import Yuvraj from '../../../../../images/Yuvraj.png'
import Image from 'next/image'
import Linkdin from '../../icons/Social/Linkdin'
import Instagram from '../../icons/Social/Instagram'
import Twitter from '../../icons/Social/Twitter'

const OwnerCard = () => {
  return (
    <div className=" flex w-[48rem] items-center gap-6 rounded-xl border border-gray-100 p-4  ">
      <div className="  min-w-[20rem] ">
        <Image src={Yuvraj} alt="" className=" object-cover " />
      </div>

      <div className="flex flex-col gap-4  ">
        <h4 className="font-calsans text-4xl text-white">Yuvraj Midha</h4>
        <div className="flex flex-wrap gap-2 ">
          <span class=" inline-block rounded-lg bg-[#999999] px-2  text-sm font-extralight uppercase text-white ">
            ceo
          </span>
          <span class=" inline-block rounded-lg bg-[#BD1784] px-2  text-sm font-extralight uppercase text-white ">
            co-founder
          </span>
          <span class=" inline-block rounded-lg bg-[#3100BB] px-2  text-sm font-extralight uppercase text-white ">
            design lead
          </span>
          <span class=" inline-block rounded-lg bg-[#F43636] px-2  text-sm font-extralight uppercase text-white ">
            frontend specialist
          </span>
          <span class=" inline-block rounded-lg bg-[#FFAE33] px-2  text-sm font-extralight uppercase text-white ">
            csa
          </span>
        </div>
        <div className="!leading-1 text-lg text-white">
          <p>
            Our team understand the needs and requirements of our customer and
            make technology to resolve the needs, with the best UX possible for
            the target audience. We believe to explore new opportunities and
            technologies that maximises the business value.
          </p>
        </div>
        <div className="flex h-4 gap-2">
          <Instagram />
          <Linkdin />
          <Twitter />
        </div>
      </div>
    </div>
  )
}

export default OwnerCard
