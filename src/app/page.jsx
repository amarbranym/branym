import React from 'react'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skill from '@/components/sections/Skill'
import Projects from '@/components/sections/Projects'

const page = () => {
  return (
    <>
      <Hero />
      <About/>
      <Skill/>
      <Projects/>
      <div className='h-screen bg-blue-200'></div>
    </>
  )
}

export default page
