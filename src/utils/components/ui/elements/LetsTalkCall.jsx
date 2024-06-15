import React from 'react'
import ArrowIcon from '../icons/ArrowIcon'

const LetsTalkCall = () => {
  return (
    <>
      <div className=" relative flex h-full  w-full flex-col justify-end">
        <div className=" absolute right-0 top-0">
          <ArrowIcon className="h-6 w-6 text-[#D9D9D9]" />
        </div>
        <div className="px-3 pt-12 lg:p-0">
          <span className=" text-sm font-calsans uppercase  text-white ">
            Give Us a Call
          </span>{' '}
          <p className=" font-calsans font-extrabold text-white md:text-2xl lg:text-xl xl:text-2xl">
            +91 708-736-2779
          </p>
        </div>
      </div>
    </>
  )
}

export default LetsTalkCall
