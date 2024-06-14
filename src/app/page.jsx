import React from 'react'
import Hero from '@/utils/sections/home/Hero'
import About from '@/utils/sections/home/About'
import Skill from '@/utils/sections/home/Skill'
import Projects from '@/utils/sections/home/Projects'
import Work from '@/utils/sections/home/Work'

const page = () => {
  return (
    <>
      <Hero />
      <About/>
      <Skill/>
      <Projects/>
      <Work/>
    </>
  )
}

export default page
