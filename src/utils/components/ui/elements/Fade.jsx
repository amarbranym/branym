'use client'
import AOS from 'aos'

import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Fade = ({ children, ...props }) => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease-in-out',
      // once: true,
    })
    // AOS.refresh()
  }, [])

  return <div {...props}>{children}</div>
}

export default Fade
