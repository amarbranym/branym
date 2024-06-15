import clsx from 'clsx'
import React from 'react'

const IconButton = ({ children,className, ...props  }) => {
  return (
    <button {...props} className={clsx(" rounded-full border border-gray-500 bg-gradient-to-r from-[#18181A] to-[#0F0F10] p-2", className)}>
      {children}
    </button>
  )
}

export default IconButton
