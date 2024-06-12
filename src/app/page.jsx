import React from 'react'
import Hero from '@/components/sections/HomePage/Hero'
import About from '@/components/sections/HomePage/About'
import Skill from '@/components/sections/HomePage/Skill'
import Projects from '@/components/sections/HomePage/Projects'
import Work from '@/components/sections/HomePage/Work'

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
