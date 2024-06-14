// components/StrokeButton.js
import React from 'react'

const StrokeButton = ({ children }) => {
  return (
    <button className="btn-semi-transparent text-md rounded-full px-6 py-2 text-white  ">
      {/* <span className="absolute inset-0 bg-gradient-to-br from-transparent  to-transparent opacity-50 transition-opacity duration-300 "></span> */}
      <span className=" ">{children}</span>
    </button>
  )
}

export default StrokeButton
