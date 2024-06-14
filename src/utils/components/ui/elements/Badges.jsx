import clsx from 'clsx'
import React from 'react'

const Badges = ({ className, color, text }) => {
  const bgcolor = `bg-[${color}]`
  return (
    <span
      className={clsx(
        'inline-block cursor-pointer  rounded-xl px-3  py-1 text-sm font-extralight  text-white ',
        className,
        bgcolor
      )}
    >
      {text}
    </span>
  )
}

export default Badges
