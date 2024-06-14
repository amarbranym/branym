import React from 'react'

const ProgressBar = ({ name, percentage }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-white">
        <p className=" font-sans font-semibold  md:text-2xl ">{name}</p>
        <p className="font-sans font-semibold md:text-2xl ">{percentage}</p>
      </div>
      <div class="mt-2 h-2 w-full  border border-white ">
        <div class="h-2  bg-white" style={{ width: percentage }}></div>
      </div>
    </div>
  )
}

export default ProgressBar
