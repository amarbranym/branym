import React from 'react'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skill from '@/components/sections/Skill'
import Projects from '@/components/sections/Projects'
import Work from '@/components/sections/Work'

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
