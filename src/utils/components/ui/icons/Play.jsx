import clsx from 'clsx';
import React from 'react';

export default function PlayIcon({ className }) {
  return (
    <div
      className={clsx('p-4 bg-white/20 rounded-full aspect-square', className)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        className="translate-x-[1px]"
        viewBox="0 0 29.977 32.387"
      >
        <path
          d="M16.193,0,32.387,29.977H0Z"
          transform="translate(29.977) rotate(90)"
          fill="#fff"
        />
      </svg>
    </div>
  );
}
