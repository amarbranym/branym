// components/StrokeButton.js
import clsx from 'clsx'
import React from 'react'

const StrokeButton = ({ className, children, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        'btn-semi-transparent text-md rounded-full px-6 py-2 text-white  ',
        className
      )}
    >
      {/* <span className="absolute inset-0 bg-gradient-to-br from-transparent  to-transparent opacity-50 transition-opacity duration-300 "></span> */}
      {children}
    </button>
  )
}

export default StrokeButton
