import React from 'react'
import ArrowIcon from '../icons/ArrowIcon'

const LetstalkEmail = () => {
  return (
      <>
        <div className=" relative flex  h-full flex-col justify-end">
          <div className=" absolute right-0 top-0">
            <ArrowIcon className="h-6 w-6 text-[#D9D9D9]" />
          </div>
          <div className="px-3 pt-12 lg:p-0">
            <span className=" text-md font-calsans uppercase  text-white ">
              Email us
            </span>{' '}
            <p className=" font-calsans text-2xl font-extrabold text-white">
              {' '}
              info@branym.com{' '}
            </p>
          </div>
        </div>
      </>
  )
}

export default LetstalkEmail
