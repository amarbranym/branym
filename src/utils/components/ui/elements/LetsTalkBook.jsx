import React from 'react'

const LetsTalkBook = () => {
  return (
      <>
        <div className="flex h-full items-center justify-between text-white">
          <div className="flex flex-col justify-end px-2 py-4 lg:p-0">
            <h3 className="font-calsans text-3xl lg:text-5xl">
              Book a Free <br /> Call Today
            </h3>
            <div className="text-md mt-2 flex items-center gap-2 font-sans font-bold">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <p className="mb-0 ">3 Slots Avaiable</p>
            </div>
          </div>
          <div className="h-[100px]  w-[100px] rounded-[2rem] border border-white"></div>
        </div>
      </>
  )
}

export default LetsTalkBook
