import React from 'react'
import Hero from '@/utils/sections/home/Hero'
import About from '@/utils/sections/home/About'
import Skill from '@/utils/sections/home/Skill'
import Works from '@/utils/sections/home/Works'
import Client from '@/utils/sections/home/Client'

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Skill />
      <Works />
      <Client />
    </>
  )
}

export default page
