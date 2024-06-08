import React from 'react'

const GradientLine = () => {
  return (
    <svg
      width="100%"
      height="2"
      viewBox="0 0 1283 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        y1="1"
        x2="1283"
        y2="1"
        stroke="url(#paint0_linear_15_80)"
        stroke-width="2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_15_80"
          x1="0"
          y1="2.5"
          x2="1283"
          y2="2.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0" />
          <stop offset="0.51" stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default GradientLine
