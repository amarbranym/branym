'use client'
import clsx from 'clsx'
import React from 'react'

const Chip = ({ className, color, text, index }) => {
  const bgcolor = `bg-[${color}]`
  return (
    <a
      key={index}
      className={clsx(
        'inline-block cursor-pointer  rounded-xl px-3  py-1 text-sm font-extralight  text-white ',
        className,
        bgcolor
      )}
    >
      {text}
    </a>
  )
}

export default Chip
