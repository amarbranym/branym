import React from 'react'
import DownArrow from '../icons/DownArrow'

const CurvedTextButton = ({ text, children, className, width="200", height="200" }) => {
  return (
    <div className={` relative flex  w-full scale-75  items-center  justify-center text-white  md:scale-100 ${className}`}>
      <svg
        className="spin-slow  "
        viewBox="0 0 100 100"
        width={width}
        height={height}
      >
        <defs>
          <path
            id="circlePath"
            d="M50,50
               m-35,0
               a 35,35 0 1,1 70,0
               a 35,35 0 1,1 -70,0"
          />
        </defs>
        <text fontSize="13" className="fill-current text-white">
          <textPath
            href="#circlePath"
            startOffset="0"
            className=" font-semibold uppercase"
          >
            {text}
          </textPath>
        </text>
      </svg>
      <div className=" absolute left-1/2  -translate-x-1/2 cursor-pointer ">
        {children}
      </div>
    </div>
  )
}

export default CurvedTextButton
