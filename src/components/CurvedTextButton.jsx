import React from 'react'

const CurvedTextButton = () => {
  return (
    <svg className="spin-slow  " viewBox="0 0 100 100" width="200" height="200">
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
          more about us. more about us.
        </textPath>
      </text>
    </svg>
  )
}

export default CurvedTextButton
